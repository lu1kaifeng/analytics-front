import {singleton} from "tsyringe";
import Statistic from "../model/Statistic";

@singleton()
export default class SubjectClient {
    public async login(userName,password){
        let response = await fetch('/api/login?'+"userName="+userName+"&password="+password,{
            method:'GET',
        })
        if(!response.ok) throw response.status
        return (await response.text())
    }

    public async getObject(token) : Promise<any>{
        let response = await fetch('/api/subject',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:token
        })
        if(!response.ok) throw response.status
        return (await response.json())
    }

    public async register(userName,password,role){
        let response = await fetch('/api/register?'+"userName="+userName+"&password="+password+"&role="+role,{
            method:'GET'
        })
        if(!response.ok) throw response.status
        return (await response.text())
    }
}