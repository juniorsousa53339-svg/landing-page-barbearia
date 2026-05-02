
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://juniorsousa53339-svg.github.io/landing-page-barbearia/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/landing-page-barbearia"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 734, hash: 'e15d9dbaf32a9696671a857b569be2d25d1fb5c2c949b0b8368579c4dad62b46', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1015, hash: '7b6ce1e260f4a4e68956c5c36803d517ecbc6c97a82c651eca73b237f89a0a25', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 31834, hash: '84f64a7a75b6417ca53a198b7d592662f241b51492a0860fc930ea86286b907b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-7N5O6TXI.css': {size: 2159, hash: '0LkjmZ28ngE', text: () => import('./assets-chunks/styles-7N5O6TXI_css.mjs').then(m => m.default)}
  },
};
