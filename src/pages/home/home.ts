import {
  Component,
  OnInit
} from '@angular/core';
import {
  MovieService
} from '../../service/movieService';
import {
  Movie
} from '../../model/movie';
import {
  Router
} from '@angular/router'


@Component({
  selector: 'homePage',
  templateUrl: 'home.html',
  styleUrls: ['./home.css']
})

export class HomePage implements OnInit {
  movies;
  newTodo;
  films = [];
  newFilm;
  flagTodo: Boolean = false;

  constructor(public movieService: MovieService, private router: Router) { }

  ngOnInit() {
    this.films = this.movieService.moviesTab;
  }

  addTodo(event) {
    this.movieService.moviesTab.push(this.newTodo)
    this.films = this.movieService.moviesTab;
  }


  deleteTodo(index) {
    this.films.splice(index, 1);
  }

  favorites(isSelected:boolean, name:string, i:number) {
    if(isSelected) {
      this.movieService.moviesFavorites = this.films.filter(e => e === name);
      console.log('ajout', this.movieService.moviesFavorites)

    }
    else {
      this.movieService.moviesFavorites.splice(i, 1);
      console.log('remove',this.movieService.moviesFavorites)
    }
  }


  filmFavorites() {
    this.router.navigate(['favorites']);
  }


}
