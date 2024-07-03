import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-favorite',
  template: `
    <span class="favorite" [class.favorite-active]="isFavorite" (click)="toggleFavorite()">
      &#9733;
    </span>
  `,
  styles: [`
    .favorite {
      font-size: 24px;
      color: #ccc;
      cursor: pointer;
    }
    .favorite-active {
      color: orange;
    }
  `]
})
export class FavoriteComponent {
  @Input() isFavorite: boolean = false;

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }
}
