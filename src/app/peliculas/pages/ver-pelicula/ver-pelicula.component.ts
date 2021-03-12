import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';
import { Pelicula } from '../../interfaces/peliculas.interface';

@Component({
  selector: 'app-ver-pelicula',
  templateUrl: './ver-pelicula.component.html',
  styleUrls: ['./ver-pelicula.component.css']
})
export class VerPeliculaComponent implements OnInit {

  pelicula: Pelicula;

  constructor(
    private activatedRoute: ActivatedRoute,
    private peliculasService: PeliculasService  
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(({id})=> {
        this.peliculasService.buscarPorID(id)
          .subscribe((pelicula)=> {
            this.pelicula = pelicula;
          });
      });
  }

}
