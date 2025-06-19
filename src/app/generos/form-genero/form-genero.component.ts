import { Component, EventEmitter, inject, Input, OnInit, Optional, Output } from "@angular/core";
import { ReactiveFormsModule, FormBuilder, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { capitalString } from "../../compartidos/funciones/validaciones";
import { GeneroCreacionDTO, GeneroDTO } from "../generos";


@Component({
  selector: 'app-form-genero',
  imports: [MatButtonModule,MatFormFieldModule,ReactiveFormsModule,MatInputModule],
  templateUrl: './form-genero.component.html',
  styleUrl: './form-genero.component.css'
})
export class FormGeneroComponent implements OnInit {
  ngOnInit(): void {
    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }

  @Input()
  modelo?: GeneroDTO;

  @Output()
  formPost = new EventEmitter<GeneroCreacionDTO>();
  //Formulario Reactivo de Angular Inyecion de la creacion del formulario
  private formbuilder = inject(FormBuilder);

  form = this.formbuilder.group({
    nombre: ['',{validators:[Validators.required,capitalString(),Validators.maxLength(50)]}]
  });

  obtenerErrorNombre():string{
    let nombre = this.form.controls.nombre;
    if(nombre.hasError('required')) return "Campo nombre Requerido";
    if(nombre.hasError('firstValue')) return nombre.getError('firstValue').mensaje;
    if(nombre.hasError('maxlength')) return `Campo nombre no puede tener mas de ${nombre.getError('maxlength').requiredLength} caracteres `; 
    return "";
  }

  guardarCambios(){
    if(!this.form.valid) return;

    const genero = this.form.value as GeneroCreacionDTO;
    this.formPost.emit(genero);
  }

}
