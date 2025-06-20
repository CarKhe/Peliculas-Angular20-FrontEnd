import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { GenerosService } from '../generos.service';
import { environment } from '../../../environments/environment.development';
import { GeneroDTO } from '../generos';
import { ListadoGenericoComponent } from "../../compartidos/componentes/listado-generico/listado-generico.component";
import {MatTableModule} from '@angular/material/table';
import { HttpResponse } from '@angular/common/http';
import { PaginacionDTO } from '../../compartidos/modelos/PaginacionDTO';
import {MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@Component({
  selector: 'app-indice-generos',
  imports: [MatButtonModule, RouterLink, ListadoGenericoComponent,MatTableModule,MatPaginatorModule,SweetAlert2Module],
  templateUrl: './indice-generos.component.html',
  styleUrl: './indice-generos.component.css'
})
export class IndiceGenerosComponent {
  generosService= inject(GenerosService);
  generos!: GeneroDTO[];
  columnasAMostrar = ['id','nombre','acciones'];
  paginacion: PaginacionDTO =  {pagina: 1,recordsPerPage:3};
  cantidadTotalRegistros!: number;
  //produccion = environment.production; // declarar las variables de enviroment
  constructor(){
    this.cargarRegistro();
  }

  cargarRegistro(){
      this.generosService.obtenerPaginado(this.paginacion).subscribe((respuesta:HttpResponse<GeneroDTO[]>) =>{ //Nos tenemos que subscribir ya que la funcion es Observable 
      this.generos = respuesta.body as GeneroDTO[]; 
      const cabecera = respuesta.headers.get("Cant-Registros") as string;
      this.cantidadTotalRegistros = parseInt(cabecera,10);
    });
  }

  actualizarPaginacion(datos: PageEvent){
    this.paginacion = {pagina: datos.pageIndex + 1,recordsPerPage:datos.pageSize};
    this.cargarRegistro();
  }

  borrarGenero(id: number){
    this.generosService.delete(id).subscribe(()=>{
      this.paginacion =  {pagina: 1,recordsPerPage:3};
      this.cargarRegistro();
    });
  }
}
