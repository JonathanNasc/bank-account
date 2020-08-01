import { Router } from 'express';
import EventParams from './EventParameters';
import EventHandler from './EventHander';

let eventRouter: Router = Router();

eventRouter.post('/', (req, res, next) => {
    let eventParams = EventParams.parse(req.body);
    res.json(EventHandler.handle(eventParams));
    res.sendStatus(201);
});

export default eventRouter;
