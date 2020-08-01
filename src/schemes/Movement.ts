import Db from "../Db";

export default class Movement {

    public accountId: string;
    public amount: number;
    public date: Date;

    public static push(accountId: string, amount: number): void {
        Db.get().movements.push(Movement.new(accountId, amount));
    }

    public static getAllByAccount(accountId: string): Array<Movement> {
        return Db.get().movements.filter((movement) => movement.accountId == accountId);
    }

    private static new(accountId: string, amount: number): Movement {
        let movement = new Movement();
        movement.accountId = accountId;
        movement.amount = amount;

        return movement;
    }

}
