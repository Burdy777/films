import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Movie } from 'interface/movie';

@Injectable()
export class MovieService {
  public moviesTab: Movie[] = [];
  public moviesFavorites: Movie[] = [];


    constructor(private http: Http) { }

    // getAllMovies():Observable<Movie[]>{
    //     console.log(this.http.get("http://www.omdbapi.com/?i=tt3896198&apikey=6d0701e2").map((res:Response)=>res.json()) )
    //     return this.http.get("http://www.omdbapi.com/?i=tt3896198&apikey=6d0701e2")
    //     .map((res: Response)=><Movie[]>res.json())
    //     .catch((error: any)=> Observable.throw(error.json().error || 'server'))

    // }

    setMoviesTab(film) {
      this.moviesTab.push(film);
    }

    getFilms() {
      return this.moviesTab;
    }

}
