
import AppServer from "./AppServer";
import { NODE_ENV, PORT } from "./config/env";
import Jasmine from "jasmine";

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
            console.error(`NODE_ENV "${NODE_ENV}" not recognized.`);
    }
}

function startServer(): void {
    new AppServer().start( PORT );
}

function runTests(): void {
}
