import EventParams from "./EventParameters";
import AccountScheme from "../schemes/accountScheme";
import Db from "../Db";
import MovementScheme from "../schemes/MovementScheme";
import AccountBalance from "../balance/AccountBalance";

export default class ExecuteDeposit {

    public static execute(eventParams: EventParams): any {
        ExecuteDeposit.validate(eventParams);

        let account = AccountScheme.getAccountById(eventParams.destination);
        if (account == null) {
            account = AccountScheme.new(eventParams.destination);
            Db.get().accounts.push(account);
        }

        Db.get().movements.push(MovementScheme.new(account.id, eventParams.amount));

        return {
            "destination": {
                "id": account.id,
                "balance": AccountBalance.getBalance(account.id)
            }
        }
    }

    public static validate(eventParams: EventParams): void {
        if (eventParams.destination == null) {
            throw new Error("Deposit invalid: origin cannot be empty");
        }

        if (eventParams.amount == null) {
            throw new Error("Deposit invalid: amount cannot be empty");
        }
    }

}