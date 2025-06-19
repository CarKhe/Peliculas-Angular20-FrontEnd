import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { capitalString } from '../../compartidos/funciones/validaciones';
import { FormGeneroComponent } from "../form-genero/form-genero.component";
import { GeneroCreacionDTO } from '../generos';
import { GenerosService } from '../generos.service';
import { extraerErrores } from '../../compartidos/funciones/extraerErrores';
import { MostrarErroresComponent } from "../../compartidos/componentes/mostrar-errores/mostrar-errores.component";
@Component({
  selector: 'app-crear-generos',
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, FormGeneroComponent, MostrarErroresComponent],
  templateUrl: './crear-generos.component.html',
  styleUrl: './crear-generos.component.css'
})
export class CrearGenerosComponent {
obtenerErrorNombre() {
throw new Error('Method not implemented.');
}
  private router = inject(Router); //Inyeccion de la dependecia del ruteo ya creado (Centraliza la instacia de la logica de servicios)
  private generoService = inject(GenerosService);
  errores: string[] = [];

  guardarCambios(genero: GeneroCreacionDTO){
    //guardar los cambios de la consulta a la api de .net
    //this.router.navigate(['/generos']);
    // this.generoService.create(genero).subscribe(()=>{
    //   this.router.navigate(['/generos']);
    // });
    this.generoService.create(genero).subscribe({
      //Cuando la operacion fue exitosa
      next:()=>{
        this.router.navigate(['/generos']);
      },
      error: err =>{
        const errores = extraerErrores(err);
        this.errores = errores;
      }

    });
  }
}
