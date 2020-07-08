import {singleton} from "tsyringe";
import StatisticClient from "../client/StatisticClient";
import Statistic from "../model/Statistic";

@singleton()
export default class StatisticService {
    constructor(private client : StatisticClient) {
    }
    public async getStatistic() : Promise<{processCount : Array<{lower,upper,value}>,timeTaken : Array<{lower,upper,value}>,totalCost : Array<{lower,upper,value}>}>{
        let list = await this.client.getStatistic();
        let obj = {processCount:[],timeTaken:[],totalCost:[]}
        obj.timeTaken = await  this.toCategorical(list.map((value, index, array) => {
            return value.timeTaken.valueOf();
        }),4);
        obj.processCount = await  this.toCategorical(list.map((value, index, array) => {
            return value.processCount.valueOf();
        }),4);
        obj.totalCost = await  this.toCategorical(list.map((value, index, array) => {
            return value.totalCost.valueOf();
        }),4);
        return obj;
    }
    private async toCategorical(list : Array<number>,length : number){
        let min : number = Number.MAX_VALUE;
        let max : number = 0;
        let categorical : Array<{lower,upper,value}> = new Array<{lower, upper, value}>();
        for(let i= 0;i < length;i++){
            categorical.push({lower:null,upper:null,value:0})
        }
        list.forEach(((value, index, array) => {
            if(value > max) max = value;
            if(value < min) min = value;
        }))
        categorical[0].lower = min;
        categorical[length - 1].upper = max;
        for(let i : number = 1;i<length;i++){
            categorical[i - 1].upper  = categorical[i - 1].lower + ((max - min) / length)
            categorical[i].lower = categorical[i-1].upper;
        }
        for(let cate of categorical){
            this.count(cate,list);
        }
        return categorical;
    }
    private count(entry : {lower,upper,value},list : Array<number>){
        for(let item of list){
            if(item >= entry.lower && item <= entry.upper){
                entry.value++;
            }
        }
        entry.lower = Math.round(entry.lower)
        entry.upper = Math.round(entry.upper)
    }
}
