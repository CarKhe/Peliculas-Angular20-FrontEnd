import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { cineCrearDTO } from '../cines';
import { MapaComponent } from "../../compartidos/componentes/mapa/mapa.component";
import { Coordenada } from '../../compartidos/componentes/mapa/coordenanda';

@Component({
  selector: 'app-form-cine',
  imports: [MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatButtonModule, RouterLink, MapaComponent],
  templateUrl: './form-cine.component.html',
  styleUrl: './form-cine.component.css'
})
export class FormCineComponent implements OnInit {
  ngOnInit(): void {
    if(this.modelo != undefined) {
      this.form.patchValue(this.modelo);
      this.coordenadasIniciales.push({latitud: this.modelo.latitud,longitud: this.modelo.longitud});
    }
  }
  @Input()
  modelo?: cineCrearDTO;

  @Output()
  posteoForm = new EventEmitter<cineCrearDTO>();

  coordenadasIniciales: Coordenada[] = [];

  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    nombre:['',{validators:[Validators.required]}],
    latitud: new FormControl<number | null>(null,Validators.required),
    longitud: new FormControl<number | null>(null,Validators.required)

  });

  obtenerErrorNombre():string{
    let nombre = this.form.controls.nombre;
    if(nombre.hasError('required')) return 'Nombre Requerido';
    return '';
  }

  guardarCambios(){
    if(!this.form.valid) return;
    const cine = this.form.value as cineCrearDTO;
    this.posteoForm.emit(cine);
  }

  coordenandaSeleccionada(coordenanda: Coordenada){
    this.form.patchValue(coordenanda);
  }

}
