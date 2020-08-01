import EventParams from "./EventParameters";
import ExecuteDeposit from "./ExecuteDeposit";
import ExecuteWithdraw from "./ExecuteWithdraw";
import ExecuteTransfer from "./ExecuteTransfer";

export default class EventHandler {

    public static handle(eventParams: EventParams): any {
        if (eventParams.type == 'deposit') {
            return ExecuteDeposit.execute(eventParams);
        }

        if (eventParams.type == 'withdraw') {
            return ExecuteWithdraw.execute(eventParams);
        }

        if (eventParams.type == 'transfer') {
            return ExecuteTransfer.execute(eventParams);
        }

        throw new Error("This type is not valid: " + eventParams.type);
    }

}