import {singleton} from "tsyringe";
import ExpenditureClient from "../client/ExpenditureClient";
import PowerExpenditure from "../model/PowerExpenditure";

@singleton()
export default class ExpenditureService {
    private client : ExpenditureClient;
    constructor(client : ExpenditureClient) {
        this.client = client;
    }
    public postExpenditure(expenditure : PowerExpenditure){
        return this.client.postExpenditure(expenditure)
    }
    public delExpenditure(id : Number){
        return this.client.delExpenditure(id);
    }
}
