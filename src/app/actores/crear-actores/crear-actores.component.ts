import { Component, inject } from '@angular/core';
import { FormActoresComponent } from "../form-actores/form-actores.component";
import { ActorCreacionDTO } from '../actores';
import { ActoresService } from '../actores.service';
import { Router } from '@angular/router';
import { extraerErrores } from '../../compartidos/funciones/extraerErrores';
import { MostrarErroresComponent } from "../../compartidos/componentes/mostrar-errores/mostrar-errores.component";

@Component({
  selector: 'app-crear-actores',
  imports: [FormActoresComponent, MostrarErroresComponent],
  templateUrl: './crear-actores.component.html',
  styleUrl: './crear-actores.component.css'
})
export class CrearActoresComponent {

  actoresService = inject(ActoresService);
  router = inject(Router);
  errores: string[] = [];
  guardarCambios(actor:ActorCreacionDTO){
    this.actoresService.Crear(actor).subscribe({
      next: () => {
        this.router.navigate(['/actores']);
      },
      error: err => {
        const errores = extraerErrores(err);
        this.errores = errores;
      }
    });
  }
}
