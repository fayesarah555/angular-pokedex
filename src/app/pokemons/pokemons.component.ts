import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemons',
  standalone: true,
  template: `
    <div>
      <h2>Pokemons</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Abilities</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let pokemon of pokemons">
            <td>{{ pokemon.name }}</td>
            <td>{{ pokemon.type }}</td>
            <td>{{ pokemon.abilities.join(', ') }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `
})
export class PokemonsComponent implements OnInit {
  pokemons: any[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokemons = this.pokemonService.getPokemons();
  }
}
