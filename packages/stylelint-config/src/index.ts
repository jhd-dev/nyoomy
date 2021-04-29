export default {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-sass-guidelines',
        'stylelint-a11y/recommended',
        'stylelint-config-prettier',
    ],
    plugins: ['stylelint-order', 'stylelint-no-unsupported-browser-features'],
    rules: {
        'order/order': [
            'dollar-variables',
            'custom-properties',
            'declarations',
            'rules',
            'at-rules',
        ],
        'plugin/no-unsupported-browser-features': [
            true,
            { severity: 'warning' },
        ],
    },
};
