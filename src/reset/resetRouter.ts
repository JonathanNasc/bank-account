import { Router } from 'express';
import Db from '../Db';

let resetRouter: Router = Router();

resetRouter.post('/', (req, res, next) => {
    Db.reset();
    res.send("OK");
    res.sendStatus(200);
});

export default resetRouter;
