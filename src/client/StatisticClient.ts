import {singleton} from "tsyringe";
import PowerInstallation from "../model/PowerInstallation";
import Statistic from "../model/Statistic";

@singleton()
export default class StatisticClient {
    public async getStatistic(){
        let response = await fetch('/statistic',{
            method:'GET',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            }
        })
        if(!response.ok) throw response.status
        return await response.json() as Statistic[];
    }
}
