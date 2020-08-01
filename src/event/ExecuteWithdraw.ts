import EventParams from "./EventParameters";
import AccountScheme from "../schemes/accountScheme";
import MovementScheme from "../schemes/MovementScheme";
import AccountBalance from "../balance/AccountBalance";
import Db from "../Db";

export default class ExecuteWithdraw {

    public static execute(eventParams: EventParams): any {
        ExecuteWithdraw.validate(eventParams);
   
        let account = AccountScheme.getAccountById(eventParams.origin);
        if (account == null) {
            throw new Error("withdraw invalid: account not found: " + eventParams.origin);
        }

        Db.get().movements.push(MovementScheme.new(account.id, - eventParams.amount));

        return  {
            "origin": {
                "id": account.id,
                "balance": AccountBalance.getBalance(account.id)
            }
        }
    }

    public static validate(eventParams: EventParams): void {
        if (eventParams.origin == null) {
            throw new Error("Withdraw invalid: origin cannot be empty");
        }

        if (eventParams.amount == null) {
            throw new Error("Withdraw invalid: amount cannot be empty");
        }
    }

}