import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { capitalString } from '../../compartidos/funciones/validaciones';
import { FormGeneroComponent } from "../form-genero/form-genero.component";
import { GeneroCreacionDTO } from '../generos';
@Component({
  selector: 'app-crear-generos',
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, FormGeneroComponent],
  templateUrl: './crear-generos.component.html',
  styleUrl: './crear-generos.component.css'
})
export class CrearGenerosComponent {
obtenerErrorNombre() {
throw new Error('Method not implemented.');
}
  private router = inject(Router); //Inyeccion de la dependecia del ruteo ya creado (Centraliza la instacia de la logica de servicios)

  guardarCambios(genero: GeneroCreacionDTO){
    //guardar los cambios de la consulta a la api de .net
    //this.router.navigate(['/generos']);
    console.log(genero);
  }
}
