import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MovieInfoService } from './services/movie-info.service';
import { MovieListComponent } from './components/movie-list/movie-list.component';


const routes: Routes = [
  { path: 'movies',  component: MovieListComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  
  ],
  providers: [MovieInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
