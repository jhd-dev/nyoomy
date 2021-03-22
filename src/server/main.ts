import { Logger } from "@overnightjs/logger";
import AppServer from "./AppServer";
import { NODE_ENV, PORT } from "./config/env";

main();

function main(): void {
    switch(NODE_ENV) {
        case "production":
        case "development":
            startServer();
            break;
        case "test":
        case "testing":
            runTests();
            break;
        default:
            Logger.Err(`NODE_ENV "${NODE_ENV}" not recognized.`);
    }
}

function startServer(): void {
    new AppServer().start( PORT );
}

function runTests(): void {
    const Jasmine = require( "jasmine" );
    const jasmine = new Jasmine();

    jasmine.loadConfig( {
                            "spec_dir": "src",
                            "spec_files": [
                                "./**/*.test.ts",
                            ],
                            "stopSpecOnExpectationFailure": false,
                            "random": true,
                        } );

    jasmine.onComplete( ( passed: boolean ) => {
        if ( passed ) {
            Logger.Info( "All tests passed." );
        }
        else {
            Logger.Err( "A test failed." );
        }
    } );

    let testPath = process.argv[3];
    if ( testPath ) {
        testPath = `./src/${testPath}.test.ts`;
        jasmine.execute( [testPath] );
    }
    else {
        jasmine.execute();
    }
}
