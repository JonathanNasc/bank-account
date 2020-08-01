import { Router } from 'express';
import AccountBalance from './AccountBalance';

let balanceRouter: Router = Router();

balanceRouter.get('/', (req, res, next) => {
    let accountId = req.query.account_id.toString();
    let balance = AccountBalance.getBalance(accountId);
    res.json(balance);
    res.sendStatus(200);
});

export default balanceRouter;
