#!/usr/bin/env python3
"""Create reproducible presentation and static hosting archives."""
from pathlib import Path
from zipfile import ZipFile,ZIP_DEFLATED
root=Path(__file__).resolve().parent.parent
out=root/'artifacts'
for name,host in [('Fargona-browser-demo.zip',True),('fergana-invest-demo.zip',False)]:
 with ZipFile(out/name,'w',ZIP_DEFLATED) as z:
  for p in sorted((root/'dist').rglob('*')):
   if p.is_file():z.write(p,p.relative_to(root/'dist') if host else p.relative_to(root))
  if host:
   z.writestr('_redirects','/* /index.html 200\n')
   z.writestr('_headers','/*\n  X-Robots-Tag: noindex, nofollow\n  X-Content-Type-Options: nosniff\n')
  else:
   z.write(root/'tools/run-demo.py','run-demo.py')
   z.write(out/'Fargona-sayt-demo.html','Fargona-sayt-demo.html')
   z.write(out/'DEMO-INSTRUCTIONS.txt','DEMO-INSTRUCTIONS.txt')
   for p in sorted((root/'docs').glob('*.md')):z.write(p,p.name)
 with ZipFile(out/name) as z:assert z.testzip() is None
 print(name,(out/name).stat().st_size,'bytes, archive verified')
