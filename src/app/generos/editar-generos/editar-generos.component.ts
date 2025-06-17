import { Component, Input, numberAttribute } from '@angular/core';
import { FormGeneroComponent } from "../form-genero/form-genero.component";
import { GeneroCreacionDTO, GeneroDTO } from '../generos';

@Component({
  selector: 'app-editar-generos',
  imports: [FormGeneroComponent],
  templateUrl: './editar-generos.component.html',
  styleUrl: './editar-generos.component.css'
})
export class EditarGenerosComponent {
  @Input({transform:numberAttribute})
  id !: number;

  genero: GeneroDTO = {id:1,nombre:"Acción"};

  editarCambios(genero: GeneroCreacionDTO){
    console.log(genero);
  }
}
