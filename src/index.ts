import Server from "./Server";

let startServer = async () => {
    let port: number = 3000
    await Server.bootstrap(port);
    console.log("Running on port " + port);
}

startServer();
