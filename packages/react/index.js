module.exports = {
    extends: ['@ixth/eslint-config-base'],
    rules: {
        // errors
        'react/jsx-filename-extension': [
            'error',
            { extensions: ['.jsx', '.tsx'] },
        ],
    },
    overrides: [
        {
            files: ['*.jsx', '*.tsx'],
            extends: [
                'plugin:jsx-a11y/recommended',
                'plugin:react-hooks/recommended',
            ],
            rules: {
                // errors
                'react-hooks/rules-of-hooks': 'error',
                'react-hooks/exhaustive-deps': 'error',

                // warnings
                'react/destructuring-assignment': 'warn',
                'react/forbid-prop-types': 'warn',
                'react/jsx-props-no-spreading': 'warn',

                // off
                'react/prop-types': 'off',
                'react/require-default-props': 'off',

                // patch-up a11y
                'jsx-a11y/label-has-associated-control': [
                    'error',
                    { assert: 'either' },
                ],
            },
        },
    ],
};
