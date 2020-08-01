import Db from "../Db";

export default class AccountScheme {

    public static readonly KEY: string = "accounts";

    public id: string;
    public date: Date;

    public static new(accountId: string): AccountScheme {
        let account = new AccountScheme();
        account.id = accountId // Math.random().toString(36).substr(2, 5); // TODO ensure it is unique
        account.date = new Date();

        return account;
    }

    public static getAccountById(accountId: string): AccountScheme {
        return Db.get().accounts.find((account) => account.id == accountId);
    }

}
