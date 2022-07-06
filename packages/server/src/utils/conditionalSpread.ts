export function conditionalSpread<T>(
    obj: T,
    key: keyof typeof obj,
    altName?: string
) {
    return typeof obj[key] === 'undefined'
        ? {}
        : { [altName ?? key]: obj[key] };
}
