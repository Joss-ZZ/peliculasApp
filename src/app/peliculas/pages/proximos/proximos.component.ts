import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Pelicula } from '../../interfaces/peliculas.interface';

@Component({
  selector: 'app-proximos',
  templateUrl: './proximos.component.html',
  styleUrls: ['./proximos.component.css']
})
export class ProximosComponent implements OnInit {

  peliculas: Pelicula[] = [];

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit(): void {
    this.peliculasService.buscarProximosEstrenos()
        .subscribe((peliculas)=> {
          this.peliculas = peliculas.results;
        });
  }

  buscar(event: string){
    this.peliculasService.buscarPeliculas(event)
      .subscribe((peliculas)=> {
        this.peliculas = peliculas.results;
      });
  }

}
