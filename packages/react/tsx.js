module.exports = {
    extends: [
        require.resolve('./base'),
        require.resolve('./jsx'),
    ],
    overrides: [
        {
            files: ['*.tsx'],
            extends: [
                'plugin:jsx-a11y/recommended',
                'plugin:react-hooks/recommended',
            ],
            rules: {
                // off
                'react/prop-types': 'off',
                'react/require-default-props': 'off',

                // warnings
                'react/forbid-prop-types': 'warn',
            },
        },
    ],
};
