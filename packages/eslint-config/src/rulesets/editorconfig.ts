import { defineConfig } from 'eslint-define-config';

module.exports = defineConfig({
    extends: ['plugin:editorconfig/noconflict'],
    plugins: ['editorconfig'],
});
