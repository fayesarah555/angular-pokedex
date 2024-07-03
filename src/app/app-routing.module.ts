// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { FavoritesComponent } from './favorites/favorites.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'pokemons', component: PokemonsComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
