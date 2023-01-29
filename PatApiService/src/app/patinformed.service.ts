import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PatInformedService {
  constructor(private http: HttpClient) {}

  getSearchApiData() {
    let searchUrl = '/api/search';
    var searchPayload = { searchTerms: 'feso' };

    return this.http.post<any>(searchUrl, searchPayload, {
      responseType: 'text' as 'json',
    });
  }

  getSearchApiJsonData() {
    let getAllInnsUrl = '/api/getAllInns';
    return this.http.get<any>(getAllInnsUrl);
  }
}
