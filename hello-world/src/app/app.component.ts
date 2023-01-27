import { Component } from '@angular/core';
import { PatService } from './pat.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hello-world';
  constructor(private user: PatService) {
    this.user.getData().subscribe((data) => {
      console.warn('fetch');
      console.warn(data);
    });
  }
}
