import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text = '';
  reversedText = '';

  onChangeText(value: string): void {
    this.text = value;
  }

  onSubmit(): void {
    this.reversedText = this.text.split('').reverse().join('');
  }

  isTextPresent(): boolean {
    return !this.text.length;
  }
}
