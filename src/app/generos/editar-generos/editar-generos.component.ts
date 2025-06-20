import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { FormGeneroComponent } from "../form-genero/form-genero.component";
import { GeneroCreacionDTO, GeneroDTO } from '../generos';
import { GenerosService } from '../generos.service';
import { CargandoComponent } from "../../compartidos/componentes/cargando/cargando.component";
import { MostrarErroresComponent } from "../../compartidos/componentes/mostrar-errores/mostrar-errores.component";
import { Router } from '@angular/router';
import { extraerErrores } from '../../compartidos/funciones/extraerErrores';

@Component({
  selector: 'app-editar-generos',
  imports: [FormGeneroComponent, CargandoComponent, MostrarErroresComponent],
  templateUrl: './editar-generos.component.html',
  styleUrl: './editar-generos.component.css'
})
export class EditarGenerosComponent implements OnInit {
  ngOnInit(): void {
    this.generoservice.obtenerPorId(this.id).subscribe(genero =>{
      this.genero = genero;
    });
  }
  @Input({transform:numberAttribute})
  id !: number;
  generoservice = inject(GenerosService);
  genero?: GeneroDTO;
  errores:string[]=[];
  router = inject(Router);

  editarCambios(genero: GeneroCreacionDTO){
    this.generoservice.update(this.id,genero).subscribe({
      next: ()=>{
        this.router.navigate(['/generos']);
      },
      error: err=>{
        const errores = extraerErrores(err);
        this.errores = errores;
      }
    });
  }
}
