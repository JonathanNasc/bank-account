import EventParams from "./eventParameters";
import * as Deposit from "../operation/deposit";
import * as Withdraw from "../operation/withdraw";
import * as Transfer from "../operation/transfer";
import * as Balance from "../balance/balance";
import HttpError from "../error/HttpError";

export let handle = (event: EventParams) => {
    if (event.type == 'deposit') return deposit(event);
    if (event.type == 'withdraw') return withdraw(event);
    if (event.type == 'transfer') return transfer(event);

    throw new HttpError(400, "This type is not valid: " + event.type);
}

let deposit = (event: EventParams): any => {
    Deposit.execute(event.destination, event.amount);
    return {
        "destination": {
            "id": event.destination,
            "balance": Balance.get(event.destination)
        }
    }
}

let withdraw = (event: EventParams): any => {
    Withdraw.execute(event.origin, event.amount);
    return  {
        "origin": {
            "id": event.origin,
            "balance": Balance.get(event.origin)
        }
    }
}

let transfer = (params: EventParams): any => {
    Transfer.execute(params.origin, params.destination, params.amount);
    return  {
        "origin": {
            "id": params.origin,
            "balance": Balance.get(params.origin)
        },
        "destination": {
            "id": params.destination,
            "balance": Balance.get(params.destination)
        }
    }
}
