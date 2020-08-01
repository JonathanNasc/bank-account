
import { NextFunction, Response, Request } from 'express';

export default class ErrorHandler {
    public static handle(err: any, req: Request, res: Response, next: NextFunction) {
        console.log(err);
        res.status(err.status || 500);
        res.json(0);
        res.end();
    }
}
