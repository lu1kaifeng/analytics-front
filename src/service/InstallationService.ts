import "reflect-metadata";
import {singleton} from "tsyringe";
import InstallationClient from "../client/InstallationClient";
import PowerInstallation from "../model/PowerInstallation";
@singleton()
export default class InstallationService {
    private client : InstallationClient;
    constructor(client : InstallationClient) {
        this.client = client;
    }
    public postInstallation(powerInstallation : PowerInstallation){
        return this.client.postInstallation(powerInstallation);
    }
    public getPage(page : Number){
        return this.client.getPage(page,30);
    }
}
