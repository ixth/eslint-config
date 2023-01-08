module.exports = {
    extends: [
        'airbnb-base',
        'plugin:prettier/recommended'
    ],
    rules: {
        // errors
        'arrow-body-style': ['error', 'as-needed'],
        curly: ['error', 'all'],
        'no-console': ['error', { allow: ['error'] }],
        'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        'prefer-destructuring': [
            'error',
            { AssignmentExpression: { object: false, array: false } },
        ],

        // warnings
        'no-param-reassign': ['warn', { props: false }],

        // off
        camelcase: 'off',
        'global-require': 'off',
        'no-underscore-dangle': 'off',
    },
};
