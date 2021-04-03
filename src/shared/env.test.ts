import assert from "assert";
import { getEnvVar } from './env';

describe("env", () => {

    const propName = "NODE_ENV";
    const absentProp = "BAD";
    const testEnv = { NODE_ENV: "test" };
    const defaultString = "default";

    describe("getEnvVar", () => {

        it("should return the specified environmental variable if found", () => {
            assert.ok(getEnvVar(propName, undefined, testEnv) === "test");
            assert.ok(getEnvVar(propName, defaultString, testEnv) === "test");
        });

        it("should return the given default value if there is one, if the given property is not found", () => {
            assert.ok(getEnvVar(absentProp, defaultString, testEnv) === defaultString);
        });

        it("should throw an error if no default value is given and the given property is not found", () => {
            assert.throws(() => getEnvVar(absentProp, undefined, testEnv));
        });

    });

});
