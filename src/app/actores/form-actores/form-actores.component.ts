import { Component, EventEmitter, inject, Input, OnInit, Output, output } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { capitalString, noFutureDate } from '../../compartidos/funciones/validaciones';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ActorCreacionDTO, ActorDTO } from '../actores';
import moment from 'moment';
import { InputImgComponent } from "../../compartidos/componentes/input-img/input-img.component";

@Component({
  selector: 'app-form-actores',
  imports: [MatButtonModule, RouterLink, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatDatepickerModule, InputImgComponent], //1
  templateUrl: './form-actores.component.html',
  styleUrl: './form-actores.component.css'
})
export class FormActoresComponent implements OnInit {
  ngOnInit(): void {
    if(this.model !== undefined) this.form.patchValue(this.model);
  }
  private formbuilder = inject(FormBuilder); //2

  @Input()
  model?:ActorDTO;



  @Output()
  posteoForm = new EventEmitter<ActorCreacionDTO>();
  //3
  form = this.formbuilder.group({
    nombre : ['',{validators:[Validators.required]}],
    fechaNacimiento: new FormControl<Date|null>(null,{
      validators:[Validators.required, noFutureDate()]
    }),
    foto: new FormControl<File | string | null>(null)
  });

  errorNombre(){
    let campo = this.form.controls.nombre;
    if(campo.hasError('required')) return "Nombre Requerido";
    return "";
  }

  errorFechaNacimiento(){
    let campo = this.form.controls.fechaNacimiento;
    if(campo.hasError('required')) return "Fecha Nacimiento Requerido";
    if(campo.hasError('futuro')) return campo.getError('futuro').mensaje;
    return "";
  }

  archivoSeleccionado(file:File){
    this.form.controls.foto.setValue(file);
  }

  guardar(){
    if(!this.form.valid) return;
    const actor = this.form.value as ActorCreacionDTO;
    actor.fechaNacimiento = moment(actor.fechaNacimiento).toDate();
    if(typeof actor.foto === "string") actor.foto = undefined;
    this.posteoForm.emit(actor);
  }
}
