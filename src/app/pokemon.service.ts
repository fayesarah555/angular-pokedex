import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private pokemons = [
    { id: 1, name: 'Bulbasaur', type: 'Grass', abilities: ['Overgrow', 'Chlorophyll'] },
    { id: 2, name: 'Charmander', type: 'Fire', abilities: ['Blaze', 'Solar Power'] },
    { id: 3, name: 'Squirtle', type: 'Water', abilities: ['Torrent', 'Rain Dish'] },
    // Add more pokemons as needed
  ];

  getPokemons(): any[] {
    return this.pokemons;
  }
}
