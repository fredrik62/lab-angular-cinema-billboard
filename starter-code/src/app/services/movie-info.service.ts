import { Injectable } from '@angular/core';
import movie from '../../sample-movies';

@Injectable()
export class MovieInfoService {
  movies: Object = [];

  constructor() { 
    this.movies = movie;
  }
  
  getMovies() {
    return this.movies;
    
  }

}
