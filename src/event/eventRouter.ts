import { Router } from 'express';
import EventParams from './EventParameters';
import EventHandler from './EventHandler';

let eventRouter: Router = Router();

eventRouter.post('/', (req, res, next) => {
    let eventParams = EventParams.parse(req.body);
    res.status(201);
    res.json(EventHandler.handle(eventParams));
});

export default eventRouter;
