import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { icon, latLng, LeafletMouseEvent, marker, Marker, MarkerOptions, tileLayer } from 'leaflet';
import { LeafletModule } from '@bluehalo/ngx-leaflet';
import { Coordenada } from './coordenanda';

@Component({
  selector: 'app-mapa',
  imports: [LeafletModule],
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.css'
})
export class MapaComponent implements OnInit {
  ngOnInit(): void {
    this.capas = this.coordenadasIniciales.map(valor => {
      const marcador = marker([valor.latitud,valor.longitud],this.markerOptions);
      return marcador;
    });
  }

  @Output()
  coordenadaSeleccionada = new EventEmitter<Coordenada>();

  @Input()
  coordenadasIniciales:Coordenada[] = [];

  markerOptions: MarkerOptions = {
    icon:icon({
      iconSize:[25,41],
      iconAnchor:[13,41],
      iconUrl: 'assets/marker-icon.png',
      iconRetinaUrl: 'assets/marker-icon-2x.png',
      shadowUrl: 'assets/marker-shadow.png'
    })
  }
  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
        { maxZoom: 18, 
          attribution: '...' 
        })
    ],
    zoom:14,
    center: latLng(28.700054184792805, -100.52992222230344)  
  };

  capas:Marker<any>[]=[];

  manejarClick(event: LeafletMouseEvent){
    const latitud = event.latlng.lat;
    const longitud = event.latlng.lng;
    this.capas=[]
    this.capas.push(marker([latitud,longitud],this.markerOptions))
    this.coordenadaSeleccionada.emit({latitud,longitud});
  }

}
