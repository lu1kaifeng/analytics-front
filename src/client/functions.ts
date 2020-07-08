import { Page } from "../model/Page";

export function postEntry<T>(t : T,path : string){
    return fetch(path,{
        method:'POST',
        body:JSON.stringify(t),
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        }
    });
}

export function delEntry(id : Number,path : string) {
    return fetch(path+'/'+id,{
        method:'DELETE',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        }
    });
}

export async function getPage<T>(path : string,page : Number,size : Number) : Promise<Page<T>>{
    let response = await fetch(path+'?page='+page+'&size='+size,{
        method:'GET',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        }
    })
    if(!response.ok) throw response.status;
    return await response.json() as Page<T>;
}
