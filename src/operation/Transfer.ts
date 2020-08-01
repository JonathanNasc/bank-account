import Account from "../schemes/Account";
import Movement from "../schemes/Movement";
import HttpError from "../error/HttpError";

export let execute = (originAccountId: string, destinationAccountId: string, amount: number): void => {
    if (Account.getById(originAccountId) == null) {
        throw new HttpError(404, "Transfer invalid: account not found");
    }

    Account.createIfNotExist(destinationAccountId);
    Movement.push(originAccountId, - amount);
    Movement.push(destinationAccountId, amount);
}
