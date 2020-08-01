import EventParams from "./EventParameters";
import AccountScheme from "../schemes/accountScheme";
import MovementScheme from "../schemes/MovementScheme";
import AccountBalance from "../balance/AccountBalance";
import Db from "../Db";

export default class ExecuteTransfer {

    public static execute(eventParams: EventParams): any {
        ExecuteTransfer.validate(eventParams);

        let accountOrigin = AccountScheme.getAccountById(eventParams.origin);
        let accountDestination = AccountScheme.getAccountById(eventParams.destination);

        if (accountOrigin == null) {
            throw new Error("Transfer invalid: account not found");
        }

        if (accountDestination == null) {
            accountDestination = AccountScheme.new(eventParams.destination);
            Db.get().accounts.push(accountDestination);
        }

        Db.get().movements.push(MovementScheme.new(accountOrigin.id, - eventParams.amount));
        Db.get().movements.push(MovementScheme.new(accountDestination.id, eventParams.amount));

        return  {
            "origin": {
                "id": accountOrigin.id,
                "balance": AccountBalance.getBalance(accountOrigin.id)
            },
            "destination": {
                "id": accountDestination.id,
                "balance": AccountBalance.getBalance(accountDestination.id)
            }
        }
    }

    public static validate(eventParams: EventParams): void {
        if (eventParams.origin == null) {
            throw new Error("Transfer invalid: origin cannot be empty");
        }
        
        if (eventParams.destination == null) {
            throw new Error("Transfer invalid: destination cannot be empty");
        }

        if (eventParams.amount == null) {
            throw new Error("Transfer invalid: amount cannot be empty");
        }
    }

}
