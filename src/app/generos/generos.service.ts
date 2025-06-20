import { inject, Injectable } from '@angular/core';
import { GeneroCreacionDTO, GeneroDTO } from './generos';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { PaginacionDTO } from '../compartidos/modelos/PaginacionDTO';
import { construirQueryParam } from '../compartidos/funciones/construirQueryParams';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  private http = inject(HttpClient); //Llamado de la variable para el llamado http 
  private urlApi = environment.apiUrl + '/Genero';

  constructor() { }

  // public getAll(): Observable<GeneroDTO[]>{ //Retorno parecido a una promesa sin importar el tiempo que pase
  //   return this.http.get<GeneroDTO[]>(this.urlApi); //Llamado de la API para retornar el valor deseado
  // }

  public obtenerPaginado(paginacion: PaginacionDTO):  Observable<HttpResponse<GeneroDTO[]>>{
    let queryparams = construirQueryParam(paginacion);
     return this.http.get<GeneroDTO[]>(this.urlApi,{params:queryparams,observe:'response'});
  }

  obtenerPorId(id:number): Observable<GeneroDTO>{
    return this.http.get<GeneroDTO>(`${this.urlApi}/${id}`);
  }

  public create(genero: GeneroCreacionDTO){
    return this.http.post(this.urlApi,genero);
  }

  public update(id:number,genero:GeneroCreacionDTO){
    return this.http.put(`${this.urlApi}/${id}`,genero);
  }

  public delete(id:number){
    return this.http.delete(`${this.urlApi}/${id}`);
  }
}
