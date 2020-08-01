import Account from "../schemes/Account";
import Movement from "../schemes/Movement";
import HttpError from "../error/HttpError";

export let execute = (originId: string, destinationId: string, amount: number): void => {
    if (Account.getById(originId) == null) {
        throw new HttpError(404, "Transfer invalid: account not found");
    }

    Account.createIfNotExist(destinationId);
    Movement.push(originId, - amount);
    Movement.push(destinationId, amount);
}
