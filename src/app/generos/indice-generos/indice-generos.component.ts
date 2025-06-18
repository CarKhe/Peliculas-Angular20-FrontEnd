import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { GenerosService } from '../generos.service';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-indice-generos',
  imports: [MatButtonModule,RouterLink],
  templateUrl: './indice-generos.component.html',
  styleUrl: './indice-generos.component.css'
})
export class IndiceGenerosComponent {
  generosService= inject(GenerosService);
  //produccion = environment.production; // declarar las variables de enviroment
  constructor(){
    this.generosService.getAll().subscribe(generos =>{ //Nos tenemos que subscribir ya que la funcion es Observable 
      console.log(generos);
    });
    // const generos = this.generosService.getAll();
    // console.log(generos);
  }
}
