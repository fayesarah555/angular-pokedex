import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { RouterModule } from '@angular/router'; // Import RouterModule for routing

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component'; // Import LoginComponent
import { AppRoutingModule } from './app.routes'; // Ensure AppRoutingModule is imported
import { PokemonsComponent } from './pokemons/pokemons.component';

@NgModule({
  declarations: [
    // AppComponent,
    LoginComponent,
    PokemonsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([]), // Add RouterModule.forRoot([]) to imports array
    AppRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
