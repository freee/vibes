module.exports = {
  parser: '@babel/eslint-parser',
  env: {
    browser: true,
    jest: true,
    node: true
  },
  plugins: ['react-hooks'],
  globals: {},
  extends: ['eslint:recommended', 'plugin:compat/recommended', 'plugin:import/recommended', 'plugin:jsx-a11y/recommended', 'plugin:react/recommended', 'plugin:storybook/recommended'],
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.tsx']
      }
    },
    // TODO: browserslist を設定するか各 polyfill に対応
    polyfills: ['window.scrollX', 'window.scrollY', 'Array.from']
  },
  rules: {
    'no-unused-vars': ['error', {
      vars: 'all',
      args: 'all',
      argsIgnorePattern: '^_'
    }],
    // TODO: ログインなどの要素に使えるようオフにしているが、要検討
    'jsx-a11y/no-autofocus': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error'
  },
  overrides: [{
    plugins: ['ft-flow'],
    files: ['*.js', '*.js.flow'],
    extends: ['plugin:ft-flow/recommended'],
    rules: {
      'ft-flow/generic-spacing': 'off',
      'ft-flow/space-after-type-colon': 'off'
    }
  }, {
    files: ['*.ts', '*.tsx'],
    extends: ['eslint-config-freee-typescript'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'jsx-a11y/no-autofocus': 'off',
      '@typescript-eslint/naming-convention': ['error', {
        selector: 'default',
        format: ['camelCase', 'PascalCase']
      }, {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase']
      }, {
        selector: 'parameter',
        format: ['camelCase', 'snake_case', 'UPPER_CASE', 'PascalCase'],
        leadingUnderscore: 'allow'
      }, {
        selector: 'property',
        format: null
      }, {
        selector: 'memberLike',
        modifiers: ['private'],
        format: ['camelCase'],
        leadingUnderscore: 'require'
      }, {
        selector: 'typeLike',
        format: ['PascalCase']
      }]
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.ts', '.tsx']
        }
      }
    }
  }]
};