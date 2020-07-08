import {inject, singleton} from "tsyringe";
import {AxiosInstance} from "axios";
import PowerInstallation from "../model/PowerInstallation";
import {delEntry, postEntry, getPage} from "./functions";
import PowerReliability from "../model/PowerReliability";
@singleton()
export default class InstallationClient{
    public postInstallation(powerInstallation : PowerInstallation){
        return postEntry<PowerInstallation>(powerInstallation,'/powerInstallation')
    }
    public delInstallation(id : Number){
        return delEntry(id,'/powerInstallation');
    }
    public getPage(page : Number,size : Number) {
        return getPage<PowerInstallation>('/powerInstallation', page, size)
    }
}
