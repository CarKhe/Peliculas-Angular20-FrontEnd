import { inject, Injectable } from '@angular/core';
import { GeneroDTO } from './generos';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  private http = inject(HttpClient); //Llamado de la variable para el llamado http 
  private urlApi = environment.apiUrl + '/Genero';

  constructor() { }

  public getAll(): Observable<GeneroDTO[]>{ //Retorno parecido a una promesa sin importar el tiempo que pase
    return this.http.get<GeneroDTO[]>(this.urlApi); //Llamado de la API para retornar el valor deseado
  }
}
