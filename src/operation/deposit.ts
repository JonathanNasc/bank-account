import Account from "../schemes/Account";
import Movement from "../schemes/Movement";

export let execute = (destinationId: string, amount: number):void => {
    Account.createIfNotExist(destinationId);
    Movement.push(destinationId, amount);
}
