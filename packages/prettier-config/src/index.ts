module.exports = {
    printWidth: 80,
    tabWidth: 2,
    singleQuote: true,
    semi: true,
    quoteProps: 'consistent',
    trailingComma: 'es5',
    endOfLine: 'lf',
    overrides: [
        {
            files: ['**/*.yml', '**/*.yaml'],
            options: {
                singleQuote: false,
            },
        },
        {
            files: ['**/package.json'],
            plugins: ['prettier-plugin-packagejson'],
        },
    ],
};
