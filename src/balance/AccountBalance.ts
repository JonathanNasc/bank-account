import Db from "../Db";
import MovementScheme from "../schemes/MovementScheme";
import AccountScheme from "../schemes/accountScheme";

export default class AccountBalance {

    public static getBalance(accountId: string): number {
        AccountBalance.validateAccount(accountId);

        return AccountBalance.getMovements(accountId)
            .map((movement: MovementScheme) => movement.amount)
            .reduce((value1, value2) => value1 + value2);
    }

    private static getMovements(accountId: string): Array<MovementScheme> {
        return Db.get().movements.filter((movement) => movement.accountId == accountId);
    }

    public static validateAccount(accountId: string): void {
        if (AccountBalance.getAccount(accountId) == null) {
            throw new Error("Not possible to get balance: account not found");
        }
    }

    private static getAccount(accountId: string): AccountScheme | null {
        return Db.get().accounts.find((account) => account.id == accountId);
    }

}