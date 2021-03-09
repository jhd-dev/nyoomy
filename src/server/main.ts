import AppServer from "./AppServer";

if (process.argv[2] !== "test") {
    new AppServer().start(5000);
}
