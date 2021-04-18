type OnEventFn = (e: React.FormEvent<HTMLInputElement>) => void;
type OnClickCallback = (s: string) => unknown;

/**
 * Provides a function that takes a FormEvent and runs the provided function
 * using its value. Useful for ensuring type safety.
 *
 * @param {OnClickCallback} callback - the function to run with the changed value
 * @returns {OnEventFn} function to feed to an event listener
 */
const useValueOnChange = (callback: OnClickCallback): OnEventFn => (e) =>
    callback((e.target as HTMLInputElement).value);

export default useValueOnChange;
