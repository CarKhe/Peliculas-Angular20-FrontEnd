import { Component, Input, numberAttribute } from '@angular/core';
import { PeliculasCrearDTO, PeliculasDTO } from '../peliculas';
import { FormPeliculaComponent } from "../form-pelicula/form-pelicula.component";
import { SelectorMultipleDTO } from '../../compartidos/componentes/selector-multiple/selectorMultipleModelo';

@Component({
  selector: 'app-editar-pelicula',
  imports: [FormPeliculaComponent],
  templateUrl: './editar-pelicula.component.html',
  styleUrl: './editar-pelicula.component.css'
})
export class EditarPeliculaComponent {
  @Input({transform: numberAttribute})
  id!:number;

  pelicula: PeliculasDTO = {
    id:1,
    titulo:'Spider-Man',
    trailer:'ABC',
    fechaLanzamiento: new Date('2025-11-11'),
    poster: 'https://moviepostermexico.com/cdn/shop/products/NEU_-_Matrix_1024x1024@2x.jpg?v=1632238741'
  }

    generosSeleccionados:SelectorMultipleDTO[]=[
      {llave:2,valor:"Drama"},
    ];
  
    generosNoSeleccionados:SelectorMultipleDTO[]=[
      {llave:1,valor:"Accion"},
      
      {llave:3,valor:"Comedia"},
    ];


  cinesSeleccionados:SelectorMultipleDTO[]=[
    {llave:3,valor:"Cinepolis"}
  ];

  cinesNoSeleccionados:SelectorMultipleDTO[]=[
    {llave:1,valor:"Cinemex"},
    {llave:2,valor:"Cineplex"}
    
  ];
    guardarCambios(pelicula:PeliculasCrearDTO){
      console.log("Editando Pelicula: ",pelicula)
    }
}
