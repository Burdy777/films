import { Component, OnInit } from '@angular/core';
import { MovieService } from 'service/movieService';
import { Movie } from 'interface/movie';

@Component({
    selector: 'favorisPage',
    templateUrl:'favoris.html',
    styleUrls:['./favoris.css']
})

export class FavorisPage implements OnInit {
  films: Movie[] = [];

  constructor(public movieService: MovieService) { }

  ngOnInit() {
    this.films = this.movieService.moviesFavorites;
  }


}
