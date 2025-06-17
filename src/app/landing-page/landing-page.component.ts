import { Component, OnInit } from '@angular/core';
import { ListadoPeliculasComponent } from '../peliculas/listado-peliculas/listado-peliculas.component';

@Component({
  selector: 'app-landing-page',
  imports: [ListadoPeliculasComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit {
  peliculasCines!: any[];
  peliculasProx !: any[];
  ngOnInit(): void {
    setTimeout(() =>{
      this.peliculasCines = [{
        nombre: 'Matrix',
        fecha: new Date("1999-05-21"),
        precio: 150.23,
        poster: 'https://moviepostermexico.com/cdn/shop/products/NEU_-_Matrix_1024x1024@2x.jpg?v=1632238741'
      },
      {
        nombre: 'Blade Runner',
        fecha: new Date("1982-11-11"),
        precio: 215.32,
        poster: 'https://moviepostermexico.com/cdn/shop/products/blade-runner-02_360x.jpg?v=1592366520'
      },
      {
        nombre: 'Drive',
        fecha: new Date("2012-01-21"),
        precio: 99.54,
        poster: 'https://moviepostermexico.com/cdn/shop/products/drive_ver20_xxlg_1024x1024@2x.jpg?v=1622739770'
      },
      {
        nombre: 'Inside Out 2',
        fecha: new Date(),
        precio: 1400.99,
        poster: 'https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg?20240514232832'
      },
      {
        nombre: 'Moana 2',
        fecha: new Date('2016-05-03'),
        precio: 300.99,
        poster: 'https://upload.wikimedia.org/wikipedia/en/7/73/Moana_2_poster.jpg'
      }];

      

      this.peliculasProx = [
      {
        nombre: 'Bad Boys: Ride or Die',
        fecha: new Date('2016-05-03'),
        precio: 300.99,
        poster: 'https://upload.wikimedia.org/wikipedia/en/8/8b/Bad_Boys_Ride_or_Die_%282024%29_poster.jpg'
      },
      {
        nombre: 'Deadpool & Wolverine',
        fecha: new Date('2016-05-03'),
        precio: 300.99,
        poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Deadpool_%26_Wolverine_poster.jpg/220px-Deadpool_%26_Wolverine_poster.jpg'
      },
      {
        nombre: 'Oppenheimer',
        fecha: new Date('2016-05-03'),
        precio: 300.99,
        poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Oppenheimer_%28film%29.jpg/220px-Oppenheimer_%28film%29.jpg'
      },
      {
        nombre: 'The Flash',
        fecha: new Date('2016-05-03'),
        precio: 300.99,
        poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/The_Flash_%28film%29_poster.jpg/220px-The_Flash_%28film%29_poster.jpg'
      }];
    },500);
  }
}
