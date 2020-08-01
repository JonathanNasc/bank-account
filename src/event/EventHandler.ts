import EventParams from "./eventParameters";
import * as Deposit from "../operation/deposit";
import * as Withdraw from "../operation/withdraw";
import * as Transfer from "../operation/transfer";
import * as Balance from "../balance/balance";
import HttpError from "../error/HttpError";

export let handle = (eventParams: EventParams) => {
    const type = eventParams.type;
    if (type == 'deposit') return deposit(eventParams);
    if (type == 'withdraw') return withdraw(eventParams);
    if (type == 'transfer') return transfer(eventParams);

    throw new HttpError(400, "This type is not valid: " + type);
}

let deposit = (params: EventParams): any => {
    Deposit.execute(params.destination, params.amount);
    return {
        "destination": {
            "id": params.destination,
            "balance": Balance.get(params.destination)
        }
    }
}

let withdraw = (params: EventParams): any => {
    Withdraw.execute(params.origin, params.amount);
    return  {
        "origin": {
            "id": params.origin,
            "balance": Balance.get(params.origin)
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
