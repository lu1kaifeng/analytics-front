import PowerExpenditure from "./PowerExpenditure";
import PowerReliability from "./PowerReliability";

export default class InstallationProcess {
    public id : Number;
    public name : String;
    public hasHappened : Boolean = false;
    public isAvailableOnline : Boolean = false;
    public daysTaken  : Number = 0;
    public promisedDaysTaken : Number =0;
    public cost : Number =0;
    public requestDocuments : Number =0;
    public tripsTaken : Number=0;
    public concurrentProcesses : Array<String> =[];
}
