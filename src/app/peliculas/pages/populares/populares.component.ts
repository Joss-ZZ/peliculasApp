import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Pelicula } from '../../interfaces/peliculas.interface';

@Component({
  selector: 'app-populares',
  templateUrl: './populares.component.html',
  styleUrls: ['./populares.component.css']
})
export class PopularesComponent implements OnInit {

  mostrarSugeridos: boolean = false;
  peliculasSugeridas: Pelicula[] = [];

  peliculas: Pelicula[] = [];

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit(): void {
    this.peliculasService.buscarPopulares()
    .subscribe((peliculas)=> {
      this.peliculas = peliculas.results;
    });
  }

  buscar(event: string){
    if(!event){
      return;
    }
    this.mostrarSugeridos = false;
    this.peliculasSugeridas = [];
    this.peliculasService.buscarPeliculas(event)
      .subscribe((peliculas)=> {
        this.peliculas = peliculas.results;
      });
  }

  teclaPresionada(event: string){
    if(!event){
      this.mostrarSugeridos = false;
      return;
    }
    this.mostrarSugeridos = true;
    this.peliculasService.buscarPeliculas(event)
      .subscribe(
        peliculas=> this.peliculasSugeridas = peliculas.results.slice(0,5),
        err => this.peliculasSugeridas = []
      );
  }

  buscarPelicula(id: string) {
    console.log(id);
    this.peliculasService.buscarPorID(id)
      .subscribe((pelicula)=> {
        console.log(pelicula);
      })
  }
}
