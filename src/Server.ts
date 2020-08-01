import * as bodyParser from "body-parser";
import * as express from "express";

import Db from "./Db";
import resetRouter from './reset/resetRouter';
import balanceRouter from "./balance/balanceRouter";
import eventRouter from "./event/eventRouter";

export default class Server {

    public app: express.Application;

    constructor() {
        Db.start();
        this.start();
    }

    public static async bootstrap(port = 3000) {
        new Server().app.listen(port);
    }

    private configureRoutes() {
        this.app.use('/reset', resetRouter);
        this.app.use('/balance', balanceRouter);
        this.app.use('/event', eventRouter);
    }

    private start() {
        this.app = express();
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.configureRoutes();
        this.app.use((err: any, req: any, res: any, next: any) => {
            console.log(err);
            res.sendStatus(err.status || 404);
            res.end();
        });
    }

}
