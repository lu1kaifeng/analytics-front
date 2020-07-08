import {singleton} from "tsyringe";
import PowerReliability from "../model/PowerReliability";
import {delEntry, getPage, postEntry} from "./functions";

@singleton()
export default class ReliabilityClient {
    public postReliability(reliability : PowerReliability){
        return postEntry<PowerReliability>(reliability,'/reliability')
    }
    public delReliability(id : Number){
        return delEntry(id,'/reliability')
    }
    public getPage(page : Number,size : Number) {
        return getPage<PowerReliability>('/reliability', page, size)
    }
}
