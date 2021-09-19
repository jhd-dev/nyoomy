export interface ICliArgs {
    help: boolean;
    _: (string | number)[];
    $0: string;
}

export interface IBaseCliArgs {
    [argName: string]: unknown;
    _: (string | number)[];
    $0: string;
}
