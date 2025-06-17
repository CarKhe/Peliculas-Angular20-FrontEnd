import {  UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ListadoGenericoComponent } from "../../compartidos/componentes/listado-generico/listado-generico.component";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { RatingComponent } from '../../compartidos/componentes/rating/rating.component';
@Component({
  selector: 'app-listado-peliculas',
  imports: [ UpperCasePipe, ListadoGenericoComponent,MatButtonModule,MatIconModule,RatingComponent],
  templateUrl: './listado-peliculas.component.html',
  styleUrl: './listado-peliculas.component.css'
})
export class ListadoPeliculasComponent {
  @Input({required:true})
  peliculas !: any[];

  @Input()
  Admin: boolean = true;

  agregarPelicula(){
    this.peliculas.push({
        nombre: 'Pelicula de Minecraft',
        fecha: new Date("2025-04-30"),
        precio: 150.23,
        poster: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/bf/IMDb_Poster.jpg'      
    });
  }

  remover($index: number){
    this.peliculas.splice($index,1)
  }
  procesarVoto(voto: number){
    alert(`Calificacion de ${voto}`);
  }
}
