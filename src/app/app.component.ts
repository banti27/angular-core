import {Component} from '@angular/core';
import {CocktailService} from './cocktail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-core';

  drinks = [];
  query = '';

  constructor(private cocktail: CocktailService) {
  }

  search(query: string): void {
    this.query = query;
    this.cocktail.search(query).subscribe((response: any) => this.drinks = response.drinks);
  }
}
