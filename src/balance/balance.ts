import Movement from "../schemes/Movement";
import Account from "../schemes/Account";
import HttpError from "../error/HttpError";

export let get = (accountId: string): number => {
    validateAccount(accountId);
    return Movement.getAllByAccount(accountId)
        .map(movement => movement.amount)
        .reduce((value1, value2) => value1 + value2);
}

let validateAccount = (accountId: string): void => {
    if (Account.getById(accountId) == null) {
        throw new HttpError(404, "Not possible to get balance: account not found");
    }
}
