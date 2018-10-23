import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { MovieService } from '../service/movieService';

import { AppComponent } from './app.component';
import { HomePage } from '../pages/home/home';
import { FavorisPage } from '../pages/favoris/favoris';
import { NavBarComponent } from './../shared/components/navBar/navBar';


@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    FavorisPage,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'', component: HomePage},
      {path:'favorites', component: FavorisPage}
    ])
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
