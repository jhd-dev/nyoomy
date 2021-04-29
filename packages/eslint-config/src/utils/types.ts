import { EslintConfig } from 'eslint-define-config';

export interface IConfig extends EslintConfig {}

export interface IConfigAmalgam {
    overrideMap: Record<string, IConfig>;
    toValidConfig: () => EslintConfig;
}

class ConfigAmalgam implements IConfigAmalgam {
    public overrideMap: Record<string, IConfig>;
    public toValidConfig(): EslintConfig {
        return {};
    }
}
