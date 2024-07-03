import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { LoginComponent } from './login/login.component';
import { FavoriteComponent } from './favorites/favorites.component'; // Corrected import
import { PokeDetailComponent } from './pokemon-detail/pokemon-detail.component'; // Corrected import

export const routes: Routes = [
  { path: 'pokemon/:name', component: PokeDetailComponent }, // Corrected to PokeDetailComponent
  { path: 'login', component: LoginComponent },
  { path: 'pokemons', component: PokemonsComponent },
  { path: 'favorites', component: FavoriteComponent }, // Corrected to FavoriteComponent
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
