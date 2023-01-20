module.exports = {
    extends: [
        require.resolve('./base'),
    ],
    overrides: [
        {
            files: ['*.jsx', '*.tsx'],
            extends: [
                'plugin:jsx-a11y/recommended',
                'plugin:react/jsx-runtime',
                'plugin:react-hooks/recommended',
            ],
            rules: {
                // errors
                'react-hooks/rules-of-hooks': 'error',
                'react-hooks/exhaustive-deps': 'error',

                // warnings
                'react/destructuring-assignment': 'warn',
                'react/jsx-props-no-spreading': 'warn',

                // patch-up a11y
                'jsx-a11y/label-has-associated-control': [
                    'error',
                    { assert: 'either' },
                ],
            },
        },
    ],
};
