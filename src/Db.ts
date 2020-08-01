import AccountScheme from "./schemes/accountScheme";
import MovementScheme from "./schemes/MovementScheme";

export default class Db {

    private static inMemoryDb: Db;

    public accounts: Array<AccountScheme> = [];
    public movements: Array<MovementScheme> = [];

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
