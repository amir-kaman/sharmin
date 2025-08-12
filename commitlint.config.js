module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [
      2,
      'always',
      [
        'core',
        'tokens',
        'storybook',
        'deps',
        'ci',
        'docs',
        'release'
      ]
    ]
  }
}