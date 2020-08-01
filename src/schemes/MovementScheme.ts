
export default class MovementScheme {

    public static readonly KEY: string = "movements";

    public accountId: string;
    public amount: number;
    public date: Date;

    public static new(accountId: string, amount: number): MovementScheme {
        let movement = new MovementScheme();
        movement.accountId = accountId;
        movement.amount = amount;

        return movement;
    }

}
