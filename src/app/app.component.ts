import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Core';

  data = {
    name: 'Bal Vikash Sharma'
  };

  onClick(): void {
    alert('I am clicked');
  }

  onKeyup(newTitle: string): void {
    this.title = newTitle;
  }
}
