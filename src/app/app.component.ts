import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'bal vikash sharma';
  todaysDate = new Date();
  cost = 5000;
  temperature = 10.5;
  pizza = {
    toppings: ['paneer', 'mashroom'],
    size: 'large'
  };
}
