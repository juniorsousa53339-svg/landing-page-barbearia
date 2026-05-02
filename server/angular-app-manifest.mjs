
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 673, hash: 'e6948d5b901d29c0f240f729b664129199868e10e615daaf0c20360dfc975825', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 954, hash: 'b2a1474aa2b20bfa6f3922c0ef0821f2bea4051f557b72c97d0db8b4e09a4fe1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 31773, hash: '546b33cfded0a8295fdc1df6dfe364cd2d6f92f161928aa31289e82066a3cfab', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-7N5O6TXI.css': {size: 2159, hash: '0LkjmZ28ngE', text: () => import('./assets-chunks/styles-7N5O6TXI_css.mjs').then(m => m.default)}
  },
};
