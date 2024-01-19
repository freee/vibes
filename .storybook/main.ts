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
    '@storybook/addon-styling-webpack',
    {
      name: '@storybook/addon-styling-webpack',
      options: {
        rules: [
          // Replaces any existing Sass rules with given rules
          {
            test: /\.s[ac]ss$/i,
            use: [
              'style-loader',
              'css-loader',
              {
                loader: 'sass-loader',
                options: { implementation: require.resolve('sass') },
              },
            ],
          },
        ],
      },
    },
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
