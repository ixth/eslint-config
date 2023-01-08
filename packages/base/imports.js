module.exports = {
    rules: {
        'import/order': 'error',
        // errors
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        'import/first': 'error',
        'import/newline-after-import': 'error',
        'import/no-duplicates': 'error',

        // off
        'import/no-extraneous-dependencies': 'off',
        'import/prefer-default-export': 'off',
    },
};
