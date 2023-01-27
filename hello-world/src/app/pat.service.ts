import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PatService {
  constructor(private http: HttpClient) {}

  getData() {
    let url = 'https://www.wipo.int/patinformed/api/search';
    return this.http.get(url);
  }
}
