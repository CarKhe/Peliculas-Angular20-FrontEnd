import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { GenerosService } from '../generos.service';
import { environment } from '../../../environments/environment.development';
import { GeneroDTO } from '../generos';
import { ListadoGenericoComponent } from "../../compartidos/componentes/listado-generico/listado-generico.component";
import {MatTableModule} from '@angular/material/table';


@Component({
  selector: 'app-indice-generos',
  imports: [MatButtonModule, RouterLink, ListadoGenericoComponent,MatTableModule],
  templateUrl: './indice-generos.component.html',
  styleUrl: './indice-generos.component.css'
})
export class IndiceGenerosComponent {
  generosService= inject(GenerosService);
  generos!: GeneroDTO[];
  columnasAMostrar = ['id','nombre','acciones'];
  //produccion = environment.production; // declarar las variables de enviroment
  constructor(){
    this.generosService.getAll().subscribe(generos =>{ //Nos tenemos que subscribir ya que la funcion es Observable 
      this.generos = generos; 
    });
    // const generos = this.generosService.getAll();
    // console.log(generos);
  }
}
