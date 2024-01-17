import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  addons: [
    '@storybook/addon-knobs',
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@storybook/addon-interactions',
    '@storybook/addon-storysource',
    'storybook-addon-pseudo-states',
    '@kemuridama/storybook-addon-github',
  ],
  stories: [
    '../docs/**/*.stories.mdx',
    '../src/**/*.stories.tsx',
    '../examples/**/*.stories.tsx',
  ],
  typescript: {
    check: true,
  },
  webpackFinal: (config) => ({
    ...config,
    module: {
      ...config.module,
      rules: [
        ...(config.module?.rules ?? []),
        {
          test: /\.stories\.tsx?$/,
          use: [require.resolve('@storybook/source-loader')],
          enforce: 'pre',
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
            },
            {
              loader: 'sass-loader',
              options: {
                implementation: require('sass'),
              },
            },
          ],
        },
        {
          test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: './fonts/[name].[ext]',
            },
          },
        },
      ],
    },
  }),
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: true,
  },
};

export default config;
