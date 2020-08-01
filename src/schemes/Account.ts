import Db from "../Db";

export default class Account {

    public id: string;
    public date: Date;

    public static getById(accountId: string): Account {
        return Db.get().accounts.find((account) => account.id == accountId);
    }

    public static createIfNotExist(accountId: string): Account {
        let account = Account.getById(accountId);
        if (account == null) {
            Account.push(accountId);
        }

        return account;
    }

    private static push(accountId: string): Account {
        let account =  Account.new(accountId);
        Db.get().accounts.push(account);

        return account;
    }

    private static new(accountId: string): Account {
        let account = new Account();
        account.id = accountId // Math.random().toString(36).substr(2, 5); // TODO ensure it is unique
        account.date = new Date();

        return account;
    }

}
