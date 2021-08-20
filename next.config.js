const path = require('path');

module.exports = {
  env: {
    publicUrl: 'https://www.demo.com/'
  },
  i18n: {
    locales: ['it'],
    defaultLocale: 'it',
    localeDetection: false
  },

  reactStrictMode: true,
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
};
