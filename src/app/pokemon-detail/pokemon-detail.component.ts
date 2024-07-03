import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-poke-detail',
  template: `
    <div *ngIf="pokemon">
      <h2>{{ pokemon.name }}</h2>
      <p>Weight: {{ pokemon.weight }}</p>
      <p>Height: {{ pokemon.height }}</p>
      <button (click)="toggleFavorite()">
        {{ isFavorite ? 'Remove from Favorites' : 'Add to Favorites' }}
      </button>
    </div>
  `
})
export class PokeDetailComponent {
  @Input() pokemon: any;
  isFavorite: boolean = false;

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }
}
