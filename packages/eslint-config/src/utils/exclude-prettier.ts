export const excludePrettier = (configList: string[]) =>
    configList.filter((config: string) => config !== 'prettier');
