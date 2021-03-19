import { Logger } from "@overnightjs/logger";
import AppServer from "./AppServer";
//import { string } from "prop-types";

const DEFAULT_PORT = 5000;
const nodeEnv = process.env.NODE_ENV ? process.env.NODE_ENV.trim() : "undefined";

switch (nodeEnv) {
    case "production":
    case "development":
        new AppServer().start(Number(process.env.PORT || DEFAULT_PORT));
        break;
    case "test":
        const Jasmine = require("jasmine");
        const jasmine = new Jasmine();

        jasmine.loadConfig({
            "spec_dir": "src",
            "spec_files": [
                "./**/*.test.ts",
            ],
            "stopSpecOnExpectationFailure": false,
            "random": true,
        });

        jasmine.onComplete((passed: boolean) => {
            if (passed) {
                Logger.Info("All tests passed.");
            } else {
                Logger.Err("A test failed.");
            }
        });

        let testPath = process.argv[3];
        if (testPath) {
            testPath = `./src/${testPath}.test.ts`;
            jasmine.execute([testPath]);
        } else {
            jasmine.execute();
        }
        break;
    default:
        throw new Error(`NODE_ENV "${nodeEnv}" not recognized.`);
}
