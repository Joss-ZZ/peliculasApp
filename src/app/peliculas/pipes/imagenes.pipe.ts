import { Pipe, PipeTransform } from '@angular/core';
import { Pelicula } from '../interfaces/peliculas.interface';

@Pipe({
  name: 'imagenes'
})
export class ImagenesPipe implements PipeTransform {

  private imgSearch: string = 'https://image.tmdb.org/t/p/w500';

  private imgPeliCard: string = 'https://image.tmdb.org/t/p/w300';
  private imgPeliLogo: string = 'https://image.tmdb.org/t/p/w185';
  private imgPeliPortada: string = 'https://image.tmdb.org/t/p/w1280';

  transform(pelicula: Pelicula, param: string ): string {

    let path: string = 'assets/no-image.jpg';

    if(param  === 'card'){
      if(pelicula.poster_path){
        path = `${this.imgPeliCard}${pelicula.poster_path}`;
      }
    }
    
    if(param === 'logo'){
      if(pelicula.poster_path){
        path = `${this.imgPeliLogo}${pelicula.poster_path}`;
      }
    }
    
    if(param === 'portada'){
      if(pelicula.backdrop_path){
        path = `${this.imgPeliPortada}${pelicula.backdrop_path}`;
      }
    }

    if(param === 'search'){
      if(pelicula.poster_path){
        path = `${this.imgPeliCard}${pelicula.poster_path}`;
      }
    }

    return path;
    
  }

}
