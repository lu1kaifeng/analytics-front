import {singleton} from "tsyringe";
@singleton()
export class SchemaService{
    private regex = new RegExp('\\((?<sheet>.*),(?<row>.*),(?<col>.*)\\)')
    private getPos(pos) : {sheet,row,col}{
        let result = this.regex.exec(pos)
        return {
            sheet:result.groups.sheet,
            row:result.groups.row,
            col:result.groups.col
        }
    }
    private getName(obj : any) : {propName,displayName}{
        if(obj.prop == undefined){
            return {
                propName: obj.group,
                displayName: obj.desc
            }
        }else{
            return {
                propName:obj.prop,
                displayName:obj.desc
            }
        }
    }
    public getMap(schemaObj : any):Map<{sheet,row,col},{propName,displayName}>{
        let map = new Map<{sheet,row,col},{propName,displayName}>()
        for(let pos in schemaObj){
            map.set(this.getPos(pos),this.getName(schemaObj[pos]));
        }
        return map;
    }
}