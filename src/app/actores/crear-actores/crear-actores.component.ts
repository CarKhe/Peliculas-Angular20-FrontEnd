import { Component } from '@angular/core';
import { FormActoresComponent } from "../form-actores/form-actores.component";
import { ActorCreacionDTO } from '../actores';

@Component({
  selector: 'app-crear-actores',
  imports: [FormActoresComponent],
  templateUrl: './crear-actores.component.html',
  styleUrl: './crear-actores.component.css'
})
export class CrearActoresComponent {
  guardarCambios(actor:ActorCreacionDTO){
    console.log('creando actor',actor);
  }
}
