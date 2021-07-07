/* eslint-disable prefer-destructuring */
/* eslint-disable no-underscore-dangle */
/* eslint-disable node/no-unsupported-features/node-builtins */
/* eslint-disable node/no-process-env */

export const NODE_ENV: string = process.env.NODE_ENV!;
export const __dev__: boolean = process.env.NODE_ENV === 'development';
export const __prod__: boolean = process.env.NODE_ENV === 'production';

export const PUBLIC_URL: URL = new URL(process.env.PUBLIC_URL!);
