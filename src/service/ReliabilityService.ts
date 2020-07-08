import {singleton} from "tsyringe";
import ReliabilityClient from "../client/ReliabilityClient";
import PowerReliability from "../model/PowerReliability";

@singleton()
export default class ReliabilityService {
    private client : ReliabilityClient;
    constructor(client : ReliabilityClient) {
        this.client = client;
    }
    public postReliability(reliability : PowerReliability){
        return this.client.postReliability(reliability)
    }
    public delReliability(id : Number){
        return this.client.delReliability(id)
    }
    public getPage(page : Number,size : Number){
        return this.client.getPage(page,size);
    }
}
