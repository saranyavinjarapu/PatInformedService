import { Component } from '@angular/core';
import { PatInformedService } from './patinformed.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Pat Informed Service';
  searchApiData = [];
  searchApiJsonData = [];
  constructor(private patInformed: PatInformedService) {}
  getSearchApiData() {
    this.patInformed.getSearchApiData().subscribe((data) => {
      console.warn(data);
      this.searchApiData = data && data;
    });
  }
  getSearchApiJsonData() {
    this.patInformed.getSearchApiJsonData().subscribe((data) => {
      console.warn(data);
      this.searchApiJsonData = data;
    });
  }
}
