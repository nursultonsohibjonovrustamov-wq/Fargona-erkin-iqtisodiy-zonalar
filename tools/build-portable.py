#!/usr/bin/env python3
"""Package the built portal as a self-contained file for offline presentations."""
from pathlib import Path
import base64
import re
import json

root = Path(__file__).resolve().parent.parent
html = (root / 'dist/index.html').read_text()
js_path = re.search(r'<script[^>]+src="([^"]+)"[^>]*></script>', html).group(1)
css_path = re.search(r'<link[^>]+href="([^"]+\.css)"[^>]*>', html).group(1)
js = (root / 'dist' / js_path.lstrip('/')).read_text()
css = (root / 'dist' / css_path.lstrip('/')).read_text()
assert 'window.location.pathname' in js
js = js.replace('window.location.pathname', 'window.__portalPath()')
js = js.replace('window.location.search', 'window.__portalSearch()')
assets = {}
for asset in sorted((root / 'public').iterdir()):
    if not asset.is_file() or asset.suffix not in ['.svg','.jpg','.jpeg','.png','.webp']: continue
    filename = asset.name
    mime = {'.svg':'image/svg+xml','.jpg':'image/jpeg','.jpeg':'image/jpeg','.png':'image/png','.webp':'image/webp'}[asset.suffix]
    data = 'data:' + mime + ';base64,' + base64.b64encode((root / 'public' / filename).read_bytes()).decode()
    assets['/' + filename] = data
    js = js.replace('/' + filename, data)
    html = html.replace('/' + filename, data)
js = re.sub(r'src:(`[^`]+`)', r'src:window.__portalAsset(\1)', js)
bootstrap = 'window.__portalAssets=' + json.dumps(assets) + ';window.__portalAsset=p=>window.__portalAssets[p]||p;' + '''
(() => {
 const portable = true; // Standalone edition always uses hash navigation.
 const local = () => new URL('https://presentation.invalid' + (location.hash.slice(1) || '/'));
 window.__portalPath = () => portable ? local().pathname : location.pathname;
 window.__portalSearch = () => portable ? local().search : location.search;
 if (!portable) return;
 for (const method of ['pushState', 'replaceState']) {
  const original = history[method].bind(history);
  history[method] = (state, title, url) => original(state, title, typeof url === 'string' && url.startsWith('/') ? '#' + url : url);
 }
 const updateLinks = () => document.querySelectorAll('a[href]').forEach(a => {
  const href = a.getAttribute('href');
  if (/^\\/(uz|en|ru|tr|zh)(\\/|$)/.test(href)) a.setAttribute('href', '#' + href);
 });
 new MutationObserver(updateLinks).observe(document.documentElement, {subtree:true,childList:true});
 document.addEventListener('DOMContentLoaded', updateLinks);
})();
'''
html = re.sub(r'<script[^>]+src="[^"]+"[^>]*></script>', '', html)
html = re.sub(r'<link[^>]+href="[^"]+\.css"[^>]*>', '', html)
html = html.replace('</head>', '<style>' + css + '</style></head>')
html = html.replace('</body>', '<script>' + bootstrap + '</script><script type="module">' + js.replace('</script', '<\\/script') + '</script></body>')
out = root / 'artifacts/Fargona-sayt-demo.html'
out.write_text(html)
print('Portable interactive portal:', out.name, out.stat().st_size, 'bytes')
