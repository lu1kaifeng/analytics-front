import {singleton} from "tsyringe";
import PowerInstallation from "../model/PowerInstallation";
import Statistic from "../model/Statistic";
import {Page} from "../model/Page";

@singleton()
export default class SpreadClient {
    public async validate(name, blob: Blob): Promise<any> {
        let response = await fetch('/api/' + name + '/validate', {
            method: 'POST',
            body: blob
        })
        if (response.ok) {
            return await response.json()
        } else
            throw {
                "row": response.headers.get("row"),
                "col": response.headers.get("col"),
                "sheet": response.headers.get("sheet"),
                "type": response.headers.get("type")
            }
    }

    public async getPage(name, page, size): Promise<Page<any>> {
        return ((await (await fetch('/api/' + name + '/page' + '?page=' + page + '&size=' + size, {
            method: 'GET'
        })).json()) as Page<any>)
    }

    public async submit(name, obj: any): Promise<any> {
        let response = await fetch('/api/' + name + '/submit', {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            }
        })
        if (response.ok) {
            return await response.json()
        } else
            throw {
                "row": response.headers.get("row"),
                "col": response.headers.get("col"),
                "sheet": response.headers.get("sheet"),
                "type": response.headers.get("type")
            }
    }

    public async getById(name, id) : Promise<any> {
        return (await (await fetch('/api/' + name + '/item/' + id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            }
        })).json())
    }
}
