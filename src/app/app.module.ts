import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component'; // Import LoginComponent
import { AppRoutingModule } from './app.routes'; // Ensure AppRoutingModule is imported
import { PokemonsComponent } from './pokemons/pokemons.component';

@NgModule({
  declarations: [
    // AppComponent,
    LoginComponent, // Include LoginComponent here
    PokemonsComponent // Include PokemonsComponent if not already included
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule, // Add FormsModule to imports array
    AppRoutingModule // Ensure AppRoutingModule is imported
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
