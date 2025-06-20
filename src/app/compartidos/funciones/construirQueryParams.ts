import { HttpParams } from "@angular/common/http";

export function construirQueryParam(obj:any):HttpParams{
    let queryParam = new HttpParams();

    for(let propiedad in obj){
        if(obj.hasOwnProperty(propiedad)){
            queryParam = queryParam.append(propiedad,obj[propiedad]);
        }
    }


    return queryParam
}