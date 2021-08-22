const path = require('path');

module.exports = {
  stories: [
    '../components/**/*.stories.mdx',
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-pseudo-states'
  ],

  babel: async options => ({
    ...options,
    presets: [
      ...options.presets,
      [
        '@babel/preset-react',
        {
          runtime: 'automatic'
        },
        'preset-react-jsx-transform' // Can name this anything, just an arbitrary alias to avoid duplicate presets'
      ]
    ]
  }),

  webpackFinal: async (config, { configType }) => {
    // SCSS
    config.module.rules.push({
      test: /\.(s*)css$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader']
    });

    // support the alias @
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/components': path.resolve(__dirname, '../components'),
      '@/lib': path.resolve(__dirname, '../lib'),
      '@/styles': path.resolve(__dirname, '../styles'),
    };

    return config;
  }
};
