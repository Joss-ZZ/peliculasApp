import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http"
import { RESTMoviesResponse, Pelicula } from '../interfaces/peliculas.interface';
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PeliculasService {

    apiKey: string = '3e3b4dd19c3f86739c81d0ea9a33cd97';
    apiURL: string = 'https://api.themoviedb.org/3/movie';
    apiURLBusqueda: string = 'https://api.themoviedb.org/3/search/movie';

    constructor(private http: HttpClient){}

    buscarPopulares(): Observable<RESTMoviesResponse>{

        const params = new HttpParams()
                        .set('api_key', this.apiKey);

        return this.http.get<RESTMoviesResponse>(`${this.apiURL}/popular`, {params:params});
    }

    buscarValoradas(): Observable<RESTMoviesResponse>{

        const params = new HttpParams()
                        .set('api_key', this.apiKey);

        return this.http.get<RESTMoviesResponse>(`${this.apiURL}/top_rated`, {params});
    }

    buscarProximosEstrenos(): Observable<RESTMoviesResponse> {
        
        const params = new HttpParams()
                        .set('api_key', this.apiKey);

        return this.http.get<RESTMoviesResponse>(`${this.apiURL}/upcoming`,{params});
    }

    buscarPeliculas(query: string): Observable<RESTMoviesResponse> {

        const params = new HttpParams()
                        .set('api_key', this.apiKey)
                        .set('query', query);

        return this.http.get<RESTMoviesResponse>(`${this.apiURLBusqueda}`, {params})
    }

    buscarPorID(id: string): Observable<Pelicula> {

        const params = new HttpParams()
                        .set('api_key', this.apiKey);
                        
        return this.http.get<Pelicula>(`${this.apiURL}/${id}`, {params})
    }

}