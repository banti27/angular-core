import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      img: '/assets/image1.jpg',
      author: 'Bal',
      title: 'Titile #1'
    },
    {
      img: '/assets/image2.jpg',
      author: 'Viaksh',
      title: 'Titile #2'
    },
    {
      img: '/assets/image3.jpg',
      author: 'Sharma',
      title: 'Titile #3'
    }
  ];
}
