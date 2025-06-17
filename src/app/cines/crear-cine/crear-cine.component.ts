import { Component } from '@angular/core';
import { FormCineComponent } from "../form-cine/form-cine.component";
import { cineCrearDTO } from '../cines';

@Component({
  selector: 'app-crear-cine',
  imports: [FormCineComponent],
  templateUrl: './crear-cine.component.html',
  styleUrl: './crear-cine.component.css'
})
export class CrearCineComponent {
  guardarCambios(cine:cineCrearDTO){
    console.log("Creando Cine: ",cine);
  }
}
