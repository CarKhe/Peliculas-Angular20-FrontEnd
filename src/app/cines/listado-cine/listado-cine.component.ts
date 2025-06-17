import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listado-cine',
  imports: [RouterLink,MatButtonModule],
  templateUrl: './listado-cine.component.html',
  styleUrl: './listado-cine.component.css'
})
export class ListadoCineComponent {

}
