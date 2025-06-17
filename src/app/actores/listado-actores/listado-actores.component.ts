import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listado-actores',
  imports: [MatButtonModule,RouterLink],
  templateUrl: './listado-actores.component.html',
  styleUrl: './listado-actores.component.css'
})
export class ListadoActoresComponent {

}
