import Account from "../schemes/Account";
import Movement from "../schemes/Movement";
import HttpError from "../error/HttpError";

export let execute = (originId: string, amount: number): void => {
    let account = Account.getById(originId);
    if (account == null) {
        throw new HttpError(404, "withdraw invalid: account not found");
    }

    Movement.push(originId, - amount);
}
