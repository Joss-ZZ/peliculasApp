import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Pelicula } from '../../interfaces/peliculas.interface';

@Component({
  selector: 'app-valoradas',
  templateUrl: './valoradas.component.html',
  styleUrls: ['./valoradas.component.css']
})
export class ValoradasComponent implements OnInit {

  peliculas: Pelicula[] = [];

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit(): void {
    this.peliculasService.buscarValoradas()
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
