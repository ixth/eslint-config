module.exports = {
    extends: ['@ixth/eslint-config-base'],
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            extends: [
                'plugin:@typescript-eslint/eslint-recommended',
                'plugin:@typescript-eslint/recommended',
            ],
            rules: {
                // replacing eslint rules with @typescript-eslint
                'no-shadow': 'off',
                '@typescript-eslint/no-shadow': 'error',

                'no-use-before-define': 'off',
                '@typescript-eslint/no-use-before-define': 'error',

                'no-useless-constructor': 'off',
                '@typescript-eslint/no-useless-constructor': 'error',

                'no-unused-vars': 'off',
                '@typescript-eslint/no-unused-vars': 'error',

                'no-empty-function': 'off',
                '@typescript-eslint/no-empty-function': 'error',

                'lines-between-class-members': 'off',
                '@typescript-eslint/lines-between-class-members': 'error',
            },
        },
    ],
};
