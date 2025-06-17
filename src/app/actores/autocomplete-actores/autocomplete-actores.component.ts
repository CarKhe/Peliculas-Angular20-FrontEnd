import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { ActorAutoCompleteDTO } from '../actores';

@Component({
  selector: 'app-autocomplete-actores',
  imports: [MatAutocompleteModule,ReactiveFormsModule,MatFormFieldModule,MatIconModule,FormsModule,MatTableModule,MatInputModule],
  templateUrl: './autocomplete-actores.component.html',
  styleUrl: './autocomplete-actores.component.css'
})
export class AutocompleteActoresComponent {
  control = new FormControl();

  actores: ActorAutoCompleteDTO[]=[
    {id:1,nombre:"Alberto del Rio",personaje:"",foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Alberto_Del_Rio_WrestleMania_32_Axxess.jpg/250px-Alberto_Del_Rio_WrestleMania_32_Axxess.jpg"},
    {id:2,nombre:"Mil Mascaras",personaje:"",foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Mil_Mascaras_en_Morbido_2012_%28cropped%29.jpg/330px-Mil_Mascaras_en_Morbido_2012_%28cropped%29.jpg"},
    {id:3,nombre:"L.A PARK",personaje:"",foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/LA_Park_at_LuchaTO_Jan_2016.jpg/330px-LA_Park_at_LuchaTO_Jan_2016.jpg"},
  ];
}
