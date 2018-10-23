import { Component, OnInit } from '@angular/core';
import { MovieService } from 'service/movieService';

@Component({
    selector: 'favorisPage',
    templateUrl:'favoris.html',
    styleUrls:['./favoris.css']
})

export class FavorisPage implements OnInit {
  favoritesFilms = [];

  constructor(public movieService: MovieService) { }

  ngOnInit() {
    this.favoritesFilms = this.movieService.moviesFavorites;
    console.log(this.movieService.moviesFavorites)

  }


}
