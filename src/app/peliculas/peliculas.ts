export interface PeliculasCrearDTO{
    titulo:string;
    fechaLanzamiento: Date;
    trailer: string;
    poster?: File;
    generosIds?: number[];
    cinesIds?: number[];
}

export interface PeliculasDTO{
    id:number;
    titulo:string;
    fechaLanzamiento: Date;
    trailer: string;
    poster?: string;
    generosIds?: number[];
    cinesIds?: number[];
}