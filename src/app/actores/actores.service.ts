import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { ActorCreacionDTO } from './actores';


@Injectable({
  providedIn: 'root'
})
export class ActoresService {
  private http = inject(HttpClient); //Llamado de la variable para el llamado http 
  private urlApi = environment.apiUrl + '/actores';
  constructor() { }

  public Crear(actor:ActorCreacionDTO){
    const formData = this.CrearFormData(actor);
    return this.http.post(this.urlApi,formData);
  }

  private CrearFormData(actor:ActorCreacionDTO):FormData{
    const formData = new FormData

    formData.append('nombre',actor.nombre);
    formData.append('fechaNacimiento',actor.fechaNacimiento.toISOString().split('T')[0]);
    if(actor.foto){
      formData.append('foto',actor.foto);
    }
    return formData
  }
}
