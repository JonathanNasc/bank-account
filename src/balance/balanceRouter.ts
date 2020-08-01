import { Router } from 'express';
import * as Balance from './balance';

let balanceRouter: Router = Router();

balanceRouter.get('/', (req, res, next) => {
    let accountId = req.query.account_id.toString();
    let balance = Balance.get(accountId);
    res.json(balance);
    res.status(200);
});

export default balanceRouter;
