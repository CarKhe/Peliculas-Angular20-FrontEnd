export function extraerErrores(obj:any):string[]{
    const err = obj.error.errors;
    let msjerr: string[] = [];

    for(let llave in err){
        let campo = llave;
        const msjcampo = err[llave].map((msj:string) => `${campo}: ${msj}`);
        msjerr = msjerr.concat(msjcampo);
    }

    return msjerr;
}