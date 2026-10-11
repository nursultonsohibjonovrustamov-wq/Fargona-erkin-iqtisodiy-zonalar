#!/usr/bin/env python3
"""Dependency-free static demonstration server with language-aware SPA fallback."""
import argparse
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote, urlsplit

class PortalHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        self.serve_request(head=False)

    def do_HEAD(self):
        self.serve_request(head=True)

    def serve_request(self, head):
        pathname = unquote(urlsplit(self.path).path)
        target = Path(self.translate_path(pathname))
        if not target.exists() and not Path(pathname).suffix:
            self.path = '/index.html'
        if head:
            super().do_HEAD()
        else:
            super().do_GET()

    def end_headers(self):
        self.send_header('X-Content-Type-Options', 'nosniff')
        self.send_header('Referrer-Policy', 'strict-origin-when-cross-origin')
        super().end_headers()

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Fergana Invest demonstration server')
    parser.add_argument('--port', type=int, default=4173)
    parser.add_argument('--host', default='127.0.0.1')
    args = parser.parse_args()
    root = Path(__file__).resolve().parent
    folder = root / 'dist' if (root / 'dist').exists() else root.parent / 'dist'
    if not (folder / 'index.html').is_file():
        parser.error('dist/index.html is missing. Run npm run build first.')
    server = ThreadingHTTPServer((args.host, args.port), partial(PortalHandler, directory=str(folder)))
    print(f'Fergana Invest demonstration on port {args.port}', flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()
