import EventParams from "./EventParameters";
import Deposit from "../operation/Deposit";
import Withdraw from "../operation/Withdraw";
import Transfer from "../operation/Transfer";
import AccountBalance from "../balance/AccountBalance";
import HttpError from "../error/HttpError";

export default class EventHandler {

    public static handle(eventParams: EventParams): any {
        const type = eventParams.type;
        if (type == 'deposit') return EventHandler.deposit(eventParams);
        if (type == 'withdraw') return EventHandler.withdraw(eventParams);
        if (type == 'transfer') return EventHandler.transfer(eventParams);

        throw new HttpError(400, "This type is not valid: " + type);
    }

    private static deposit(params: EventParams): any {
        Deposit.execute(params.destination, params.amount);
        return {
            "destination": {
                "id": params.destination,
                "balance": AccountBalance.getBalance(params.destination)
            }
        }
    }

    private static withdraw(params: EventParams): any {
        Withdraw.execute(params.origin, params.amount);
        return  {
            "origin": {
                "id": params.origin,
                "balance": AccountBalance.getBalance(params.origin)
            }
        }
    }

    private static transfer(params: EventParams): any {
        Transfer.execute(params.origin, params.destination, params.amount);
        return  {
            "origin": {
                "id": params.origin,
                "balance": AccountBalance.getBalance(params.origin)
            },
            "destination": {
                "id": params.destination,
                "balance": AccountBalance.getBalance(params.destination)
            }
        }
    }

}
