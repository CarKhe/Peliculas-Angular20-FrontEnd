import { Component } from '@angular/core';
import { FormPeliculaComponent } from "../form-pelicula/form-pelicula.component";
import { PeliculasCrearDTO } from '../peliculas';
import { SelectorMultipleDTO } from '../../compartidos/componentes/selector-multiple/selectorMultipleModelo';

@Component({
  selector: 'app-crear-pelicula',
  imports: [FormPeliculaComponent],
  templateUrl: './crear-pelicula.component.html',
  styleUrl: './crear-pelicula.component.css'
})
export class CrearPeliculaComponent {
  
  generosSeleccionados:SelectorMultipleDTO[]=[];

  generosNoSeleccionados:SelectorMultipleDTO[]=[
    {llave:1,valor:"Accion"},
    {llave:2,valor:"Drama"},
    {llave:3,valor:"Comedia"},
  ];

  cinesSeleccionados:SelectorMultipleDTO[]=[];

  cinesNoSeleccionados:SelectorMultipleDTO[]=[
    {llave:1,valor:"Cinemex"},
    {llave:2,valor:"Cineplex"},
    {llave:3,valor:"Cinepolis"},
  ];

  guardarCambios(pelicula:PeliculasCrearDTO){
    console.log("Creando Pelicula: ",pelicula)
  }
}
