module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  extends: [
    'plugin:tailwindcss/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    // "eslint:recommended",
    'prettier'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    /** eslint options */
    semi: ['error', 'never'],
    'no-duplicate-imports': 'error',
    'space-in-parens': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'no-self-compare': 'error',
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'computed-property-spacing': ['error', 'never'],
    'func-call-spacing': ['error', 'never'],
    'indent': ['error', 2],
    'key-spacing': ['error', { 'beforeColon': false }],
    'max-len': ['error', { 'code': 70 }],
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': 'error',
    'no-whitespace-before-property': 'error',
    'object-curly-spacing': ['error', 'always'],
    quotes: ['error', 'single'],
    'rest-spread-spacing': ['error', 'never'],
    /** eslint-plugin-typescript options */

    /** vue3-eslint options */
    'vue/block-lang': ['error', {
      'script': { 'lang': 'ts' }
    }],
    'vue/html-closing-bracket-newline': ['error', {
      'singleline': 'never',
      'multiline': 'always'
    }],
    'vue/html-closing-bracket-spacing': ['error', {
      'startTag': 'never',
      'endTag': 'never',
      'selfClosingTag': 'always'
    }],
    'vue/html-indent': ['error', 2, {
      'attribute': 1,
      'baseIndent': 1,
      'closeBracket': 0,
      'alignAttributesVertically': true,
      'ignores': []
    }],
    'vue/html-self-closing': ['error', {
      'html': {
        'void': 'never',
        'normal': 'always',
        'component': 'always'
      },
      'svg': 'always',
      'math': 'always'
    }],
    'vue/first-attribute-linebreak': ['error', {
      'singleline': 'ignore',
      'multiline': 'below'
    }],
    'vue/max-attributes-per-line': ['error', {
      'singleline': {
        'max': 1
      },      
      'multiline': {
        'max': 1
      }
    }],
    'vue/multiline-html-element-content-newline': ['error', {
      'ignoreWhenEmpty': true,
      'ignores': ['pre', 'textarea'],
      'allowEmptyLines': true
    }],
    'vue/mustache-interpolation-spacing': ['error', 'always'],
    'vue/no-spaces-around-equal-signs-in-attribute': ['error'],
    'vue/prop-name-casing': ['error', 'camelCase'],
    'vue/v-bind-style': ['error', 'shorthand'],
    'vue/v-on-style': ['error', 'shorthand'],
    'vue/component-options-name-casing': ['error', 'PascalCase'],
    'vue/html-button-has-type': ['error', {
      'button': true,
      'submit': true,
      'reset': true
    }],
    'vue/html-comment-content-spacing': ['error',
      'always',
      {
        'exceptions': ['*']
      }
    ],
    'vue/html-comment-indent': ['error', 2]
  }
}