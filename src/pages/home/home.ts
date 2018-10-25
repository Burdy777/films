import {
  Component,
  OnInit
} from '@angular/core';
import {
  MovieService
} from '../../service/movieService';

import {
  Router
} from '@angular/router'
import { Movie } from 'interface/movie';


@Component({
  selector: 'homePage',
  templateUrl: 'home.html',
  styleUrls: ['./home.css']
})

export class HomePage implements OnInit {
  newFilm: string;
  ListFilms: Movie[] = [];
  flagTodo: Boolean = false;

  constructor(public movieService: MovieService, private router: Router) { }

  ngOnInit() {
    this.ListFilms = this.movieService.moviesTab;
  }

  addMovie() {
    this.movieService.moviesTab.push({title: this.newFilm, favorite: false});
    this.ListFilms = this.movieService.moviesTab;
  }


  deleteTodo(index) {
    this.ListFilms.splice(index, 1);
  }

  favorites(film: Movie, i: number): void {
    const checked: boolean = (film.favorite = !film.favorite);
    if (checked) {
      const filmFavorite = this.ListFilms.filter(currentFilm => currentFilm.favorite && (currentFilm.title === film.title))[0];

      this.movieService.moviesFavorites.push(filmFavorite);
      console.log(this.movieService.moviesFavorites);

    }else {
      for (const currentFilm of this.movieService.moviesFavorites) {
         if(currentFilm.title === film.title) {
          const y = this.movieService.moviesFavorites;
          const i:number = this.movieService.moviesFavorites.indexOf(currentFilm);
          y.splice(i,1);
         }
      }
    }
  }


  filmFavorites() {
    this.router.navigate(['favorites']);
  }


}

// Variable, Lecture Ecriture, Boucle, Testabilité
