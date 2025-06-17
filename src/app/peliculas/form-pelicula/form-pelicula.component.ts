import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { InputImgComponent } from '../../compartidos/componentes/input-img/input-img.component';
import { PeliculasCrearDTO, PeliculasDTO } from '../peliculas';
import moment from 'moment';
import { SelectorMultipleDTO } from '../../compartidos/componentes/selector-multiple/selectorMultipleModelo';
import { SelectorMultipleComponent } from "../../compartidos/componentes/selector-multiple/selector-multiple.component";
import { AutocompleteActoresComponent } from "../../actores/autocomplete-actores/autocomplete-actores.component";

@Component({
  selector: 'app-form-pelicula',
  imports: [MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatButtonModule, RouterLink, MatDatepickerModule, InputImgComponent, SelectorMultipleComponent, AutocompleteActoresComponent],
  templateUrl: './form-pelicula.component.html',
  styleUrl: './form-pelicula.component.css'
})
export class FormPeliculaComponent implements OnInit {
  ngOnInit(): void {
    if(this.modelo !== undefined) this.form.patchValue(this.modelo);
  }

  @Input({required:true})
  generosNoSeleccionados!: SelectorMultipleDTO[];

  @Input({required:true})
  generosSeleccionados!: SelectorMultipleDTO[];

  
  @Input({required:true})
  CinesNoSeleccionados!: SelectorMultipleDTO[];

  @Input({required:true})
  CinesSeleccionados!: SelectorMultipleDTO[];


  @Input()
  modelo?: PeliculasDTO;

  @Output()
  posteoFormulario = new EventEmitter<PeliculasCrearDTO>();

  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    titulo: ['',{validators:[Validators.required]}],
    fechaLanzamiento: new FormControl<Date | null>(null, {validators:[Validators.required]}),
    trailer:'',
    poster: new FormControl<File | string |null>(null)
  });


  archivoSeleccionado(file:File){
    this.form.controls.poster.setValue(file);
  }

  guardarCambios(){
    if(!this.form.valid) return;
    const pelicula = this.form.value as PeliculasCrearDTO;
    pelicula.fechaLanzamiento = moment(pelicula.fechaLanzamiento).toDate();
    const generosIds = this.generosSeleccionados.map(val => val.llave);
    pelicula.generosIds = generosIds;
    const cinesIds = this.CinesSeleccionados.map(val=>val.llave);
    pelicula.cinesIds = cinesIds;
    this.posteoFormulario.emit(pelicula);
  }

  obtenerErrorCampoTitulo():string{
    let campo= this.form.controls.titulo;
    if(campo.hasError('required')) return "Valor Requerido";
    return "";
  }

  obtenerFechaLanzamiento():string{
    let campo= this.form.controls.fechaLanzamiento;
    if(campo.hasError('required')) return "Se Requiere la fecha de lanzamiento";
    return "";
  }


}
