import Account from "./schemes/Account";
import Movement from "./schemes/Movement";

export default class Db {

    private static inMemoryDb: Db;

    public accounts: Array<Account> = [];
    public movements: Array<Movement> = [];

    public static get(): Db {
        return Db.inMemoryDb;
    }

    public static start(): void {
        Db.inMemoryDb = new Db;
    }

    public static reset(): void {
        Db.start();
    }

}
