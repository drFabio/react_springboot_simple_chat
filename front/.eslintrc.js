module.exports = {
  'extends': ['standard', 'standard-jsx'],
  'parser': 'babel-eslint',
  'plugins': [
    'react'
  ],
  'parserOptions': {
    'ecmaVersion': 2017,
    'ecmaFeatures': {
      'impliedStrict': true,
      'jsx': true
    }
  },
  'env': {
    'browser': true,
    'node': true,
    'jest': true,
    'es6': true
  },
  'rules': {
    'prefer-const': 2
  }
}
