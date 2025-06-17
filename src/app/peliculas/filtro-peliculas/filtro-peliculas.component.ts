import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ListadoPeliculasComponent } from "../listado-peliculas/listado-peliculas.component";
import { FiltroPelicula } from './filtroPeliculas';
import { Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filtro-peliculas',
  imports: [MatButtonModule, MatFormField, ReactiveFormsModule, MatInputModule, MatSelectModule, MatCheckboxModule, ListadoPeliculasComponent],
  templateUrl: './filtro-peliculas.component.html',
  styleUrl: './filtro-peliculas.component.css'
})
export class FiltroPeliculasComponent implements OnInit {
  ngOnInit(): void {
    this.leerValoresUrl();
    this.buscarPeliculas(this.form.value as FiltroPelicula);
    this.form.valueChanges.subscribe(valores =>{
      this.peliculas = this.peliculasOriginal;
      this.buscarPeliculas(valores as FiltroPelicula);
      this.escribirUrlParametros(valores as FiltroPelicula);
    });
  }
  private formBuilder = inject(FormBuilder);
  private location = inject(Location);
  private activatedRoute = inject(ActivatedRoute);

  form = this.formBuilder.group({
    titulo:'',
    generoId: 0,
    proximosEstrenos: false,
    enCines: false
  });

  generos =[
    {generoId: 1,genero:"Drama"},
    {generoId: 2,genero:"Accion"},
    {generoId: 3,genero:"Comedia"}
  ]

  peliculasOriginal = [{
    nombre: 'Matrix',
    fecha: new Date("1999-05-21"),
    precio: 150.23,
    poster: 'https://moviepostermexico.com/cdn/shop/products/NEU_-_Matrix_1024x1024@2x.jpg?v=1632238741',
    generos: [1,2],
    enCines: true,
    prox:false
  },
  {
    nombre: 'Blade Runner',
    fecha: new Date("1982-11-11"),
    precio: 215.32,
    poster: 'https://moviepostermexico.com/cdn/shop/products/blade-runner-02_360x.jpg?v=1592366520',
    generos: [1],
    enCines: true,
    prox:true
  },
  {
    nombre: 'Drive',
    fecha: new Date("2012-01-21"),
    precio: 99.54,
    poster: 'https://moviepostermexico.com/cdn/shop/products/drive_ver20_xxlg_1024x1024@2x.jpg?v=1622739770',
    generos: [1,2,3],
    enCines: true,
    prox:false
  },
  {
    nombre: 'Inside Out 2',
    fecha: new Date(),
    precio: 1400.99,
    poster: 'https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg?20240514232832',
    generos: [1,2,3],
    enCines: false,
    prox:true
  },
  {
    nombre: 'Moana 2',
    fecha: new Date('2016-05-03'),
    precio: 300.99,
    poster: 'https://upload.wikimedia.org/wikipedia/en/7/73/Moana_2_poster.jpg',
    generos: [1,3],
    enCines: true,
    prox:true
  },
  {
    nombre: 'Bad Boys: Ride or Die',
    fecha: new Date('2016-05-03'),
    precio: 300.99,
    poster: 'https://upload.wikimedia.org/wikipedia/en/8/8b/Bad_Boys_Ride_or_Die_%282024%29_poster.jpg',
    generos: [2,3],
    enCines: true,
    prox:false
  },
  {
    nombre: 'Deadpool & Wolverine',
    fecha: new Date('2016-05-03'),
    precio: 300.99,
    poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Deadpool_%26_Wolverine_poster.jpg/220px-Deadpool_%26_Wolverine_poster.jpg',
    generos: [1,3],
    enCines: false,
    prox:true
  },
  {
    nombre: 'Oppenheimer',
    fecha: new Date('2016-05-03'),
    precio: 300.99,
    poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Oppenheimer_%28film%29.jpg/220px-Oppenheimer_%28film%29.jpg',
    generos: [1],
    enCines: false,
    prox:true
  },
  {
    nombre: 'The Flash',
    fecha: new Date('2016-05-03'),
    precio: 300.99,
    poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/The_Flash_%28film%29_poster.jpg/220px-The_Flash_%28film%29_poster.jpg',
    generos: [3],
    enCines: true,
    prox:false
  }];

  peliculas = this.peliculasOriginal;

  limpiar(){
    this.form.patchValue({
      titulo:'',
      generoId: 0,
      proximosEstrenos: false,
      enCines: false
    });
  }

  buscarPeliculas(valores: FiltroPelicula){
    if(valores.titulo){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.nombre.indexOf(valores.titulo) !== -1);
    }
    if(valores.generoId !=0){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.generos.indexOf(valores.generoId) != -1);
    }
    if(valores.proximosEstrenos){
      this.peliculas=this.peliculas.filter(pelicula => pelicula.prox);
    }
    if(valores.enCines){
      this.peliculas=this.peliculas.filter(pelicula => pelicula.enCines);
    }
  }


  escribirUrlParametros(valores: FiltroPelicula){
    let queryStrings =[];
    if(valores.titulo){
      queryStrings.push(`titulo=${encodeURIComponent(valores.titulo)}`);
    }
    if(valores.generoId !== 0){
      queryStrings.push(`generoId=${valores.generoId}`);
    }
    if(valores.proximosEstrenos){
      queryStrings.push(`proximosEstrenos=${valores.proximosEstrenos}`);
    }
    if(valores.enCines){
      queryStrings.push(`enCines=${valores.enCines}`);
    }

    this.location.replaceState("peliculas/filtrar",queryStrings.join('&'));
  }

  leerValoresUrl(){
    this.activatedRoute.queryParams.subscribe((params:any)=>{
      var object:any ={};
      if(params.titulo) object.titulo = params.titulo;
      if(params.generoId) object.generoId = Number(params.generoId);
      if(params.proximosEstrenos) object.proximosEstrenos = params.proximosEstrenos;
      if(params.enCines) object.enCines = params.enCines;
      this.form.patchValue(object);
    });
  }
}
