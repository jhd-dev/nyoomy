export function attemptParseInt(
    str: string,
    radix: number = 10,
    defaultInt: number = 0
): number {
    const attempt = parseInt(str, radix);
    return isNaN(attempt) ? defaultInt : attempt;
}

export function padNumber(n: number, minDigits: number): string {
    let result = n === 0 ? '' : String(n);
    for (let i = 0; i < minDigits; i++) {
        if (n / 10 ** i < 1) {
            result = `0${result}`;
        }
    }
    return result;
}

export function isValidLabel(label?: string): boolean {
    return typeof label === 'string' && label.length > 0;
}
