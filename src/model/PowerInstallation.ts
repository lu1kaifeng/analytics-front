import InstallationProcess from "./InstallationProcess";
import PowerExpenditure from "./PowerExpenditure";
import PowerReliability from "./PowerReliability";

export default class PowerInstallation {
    public id: Number;
    public name: String;
    public type: Type;
    public scale: Scale;
    public govDept: String;
    public office: String;
    public relatedDept : String;
    public contact: String;
    public contactTel: String;
    public installationProcesses: Array<InstallationProcess> = [];
    public expenditure : PowerExpenditure ;
    public reliability : PowerReliability;
}
export enum Type{
    REAL_ESTATE= "REAL_ESTATE",
    FACTORY= "FACTORY",
    WAREHOUSE= "WAREHOUSE"
}

export enum Scale{
    LARGE="LARGE",
    MEDIUM="MEDIUM",
    SMALL="SMALL"
}
