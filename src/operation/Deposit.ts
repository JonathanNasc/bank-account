import Account from "../schemes/Account";
import Movement from "../schemes/Movement";

export let execute = (destinationAccountId: string, amount: number):void => {
    Account.createIfNotExist(destinationAccountId);
    Movement.push(destinationAccountId, amount);
}
