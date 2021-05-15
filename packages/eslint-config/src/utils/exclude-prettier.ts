export const excludePrettier = (configList: string[]): string[] =>
    configList.filter((config: string) => config !== 'prettier');
