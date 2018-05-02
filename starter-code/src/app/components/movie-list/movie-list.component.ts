import { Component, OnInit } from '@angular/core';
import { MovieInfoService } from '../../services/movie-info.service';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Object = [];
  constructor(private movieInfoService: MovieInfoService) { }

  ngOnInit() {
    // this.movieTitle.push(MovieInfoService);
    this.movies = this.movieInfoService.getMovies();
    
  }
  
}
