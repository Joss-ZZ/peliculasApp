import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { PeliculasService } from '../../peliculas/services/peliculas.service';
import { Pelicula } from '../../peliculas/interfaces/peliculas.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  termino: string = '';

  @Output() onEnter: EventEmitter<Pelicula[]> = new EventEmitter();

  constructor(private peliculasService: PeliculasService) { }

  items: MenuItem[] = []

  ngOnInit(): void {
    this.items = [
      {
        label: 'Populares',
        routerLink: '/'
      },
      {
        label: 'Más valorados',
        routerLink: 'mas-valoradas'
      },
      {
        label: 'Próximos estrenos',
        routerLink: 'proximos-estrenos'
      }
    ]
  }

  buscar(){
    this.peliculasService.buscarPeliculas(this.termino)
        .subscribe((peliculas)=> {
          this.onEnter.emit(peliculas.results);
        })
  }
  
}
