import {singleton} from "tsyringe";
import PowerExpenditure from "../model/PowerExpenditure";
import {delEntry, postEntry} from "./functions";

@singleton()
export default class ExpenditureClient {
    public postExpenditure(expenditure : PowerExpenditure){
        return postEntry<PowerExpenditure>(expenditure,'/expenditure')
    }
    public delExpenditure(id : Number){
        return delEntry(id,'/expenditure')
    }
}
