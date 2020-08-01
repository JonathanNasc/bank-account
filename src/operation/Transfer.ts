import Account from "../schemes/Account";
import Movement from "../schemes/Movement";

export default class Transfer {

    public static execute(originAccountId: string, destinationAccountId: string, amount: number): void {
        if (Account.getById(originAccountId) == null) {
            throw new Error("Transfer invalid: account not found");
        }

        Account.createIfNotExist(destinationAccountId);
        Movement.push(originAccountId, - amount);
        Movement.push(destinationAccountId, amount);
    }

}
