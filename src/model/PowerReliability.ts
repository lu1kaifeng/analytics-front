export default class PowerReliability {
    public  id:Number;
    public  govDept:String;
    public  office:String;
    public  relatedDept:String;
    public  contact:String;
    public  contactTel:String;
    public  blackOutTimeSpan:Number=0;
    public  blackOutFreq:Number=0;
    public  isPowerSupplierMonitoringToolAutomatic:Boolean;
    public  isPowerSupplierRestoringToolAutomatic:Boolean;
    public  externalWatchDogPresence:Boolean;
    public  budgetaryIntimidationPresence:Boolean;
}
