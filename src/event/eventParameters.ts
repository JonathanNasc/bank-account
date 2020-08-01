export default class EventParams {
    type: string;
    destination: string;
    origin: string;
    amount: number;

    public static parse(body: any): EventParams {
        let eventParams: EventParams = <EventParams> body;
        eventParams.amount = Number(eventParams.amount);
        return eventParams;
    }
}
