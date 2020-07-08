export class Subject{
    private token: String;
    private subject: any;
    constructor(token : String,subject : any) {
        this.token = token;
        this.subject = subject;
    }
    static load(){
        return JSON.parse(window.localStorage.getItem("Subject"))
    }
    static persist(subject){
        Subject.clear();
        window.localStorage.setItem("Subject",JSON.stringify(subject))
    }
    static clear(){
        window.localStorage.removeItem("Subject");
    }
}