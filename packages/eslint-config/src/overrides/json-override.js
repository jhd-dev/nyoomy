module.exports = [
    {
        files: ['*.json', '*.jsonc'],
        extends: ['plugin:json/recommended-with-comments'],
        rules: {
            'json/*': ['warn', { allowComments: true }],
            'json/duplicate-key': 'error',
            'json/trailing-comma': 'error',
        },
    },
];
