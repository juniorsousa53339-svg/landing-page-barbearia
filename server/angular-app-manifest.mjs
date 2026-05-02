
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/landing-page-barbearia/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/landing-page-barbearia"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 696, hash: '0bacf5e301dde88fd3f437d1d5f8a7344d39cf0faef6272820c3a1e4b4bf773d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 977, hash: '3e08a796772685e5d2e35489875cf9c67eedd9d12d8b613704e4dd07987ee3e2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 31796, hash: '8c894ea1e6f474f890bce0f0681b61fe11d4c89a22ef0db89f894cf944ced193', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-7N5O6TXI.css': {size: 2159, hash: '0LkjmZ28ngE', text: () => import('./assets-chunks/styles-7N5O6TXI_css.mjs').then(m => m.default)}
  },
};
