import Account from "../schemes/Account";
import Movement from "../schemes/Movement";

export default class Withdraw {

    public static execute(originAccountId: string, amount: number): void {
        let account = Account.getById(originAccountId);
        if (account == null) {
            throw new Error("withdraw invalid: account not found");
        }

        Movement.push(originAccountId, - amount);
    }

}