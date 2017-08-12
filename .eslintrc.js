module.exports = {
    root: true,
    // parser: 'babel-eslint',
    // parserOptions: {
    //     sourceType: 'module'
    // },
    env: {
        browser: true,
    },
    extends: 'airbnb-base',
    plugins: [
        'html'
    ],
    globals: {
        firebase: true,
    },
    // Uncomment this block to use the Webpack resolver to check if imports are valid.
    settings: {
        'import/resolver': {
            'webpack': {
                'config': 'build/webpack.config.js'
            }
        }
    },
    rules: {
        // Our rules are based on "AirBNB Base'. Below are our overrides.
        'indent': ['error', 4, { SwitchCase: 1 }], // 4-space indents
        'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true, allowTaggedTemplates: true }],
        'max-len': ['error', {
            code: 120,                             // We all have big screens - use them!
            ignoreUrls: true,                      // A bunch of these things are a pain to maintain when wrapped...
            ignoreStrings: true,
            ignoreRegExpLiterals: true,
            ignoreTemplateLiterals: true,
        }],
        'arrow-parens': ['error', 'as-needed'],    // No reason to write ((a) => {..}) when (a => {..}) will do
        'no-trailing-spaces': 0,                   // Many IDEs insert these, they're invisible, and cause no harm
        'no-console': 1,                           // We use console for debugging, should revisit this
        'no-alert': 0,                             // These are actually pretty useful in modern browsers
        'comma-dangle': 0,                         // This seems good but ends up being painful in large nested objects
        'no-plusplus': 0,                          // i += 1 is REALLY annoying for devs used to ++. We'll be careful.

        // This is an ES5 project
        'prefer-template': 0,
        'object-shorthand': 0,
        'space-before-function-paren': 0,
        'prefer-arrow-callback': 0,
        'func-names': 0,
        'no-param-reassign': 0,
        'no-var': 0,

        // don't require extensions when importing
        'import/extensions': ['error', 'always', {
            'js': 'never',
        }],

        // allow optionalDependencies
        'import/no-extraneous-dependencies': ['error', {
            'optionalDependencies': ['test/index.js']
        }],

        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    }
};