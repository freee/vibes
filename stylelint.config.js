module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  rules: {
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['container-name', 'container-type'],
      },
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'extend',
          'at-root',
          'each',
          'for',
          'mixin',
          'include',
          'if',
          'else',
          'use',
          'function',
          'return',
          'container',
        ],
      },
    ],
    'unit-no-unknown': [true, { ignoreUnits: ['svh'] }],
  },
};
