export interface ICliArgs {
    help: boolean;
    _: Array<string | number>;
    $0: string;
}

export interface IBaseCliArgs {
    [argName: string]: unknown;
    _: Array<string | number>;
    $0: string;
}
