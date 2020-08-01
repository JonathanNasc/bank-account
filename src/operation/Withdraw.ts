import Account from "../schemes/Account";
import Movement from "../schemes/Movement";
import HttpError from "../error/HttpError";

export default class Withdraw {

    public static execute(originAccountId: string, amount: number): void {
        let account = Account.getById(originAccountId);
        if (account == null) {
            throw new HttpError(404, "withdraw invalid: account not found");
        }

        Movement.push(originAccountId, - amount);
    }

}