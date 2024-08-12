import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {
  private apiUrl = `${environment.apiUrl}`
  
  constructor(private http: HttpClient) { }

  private urlContrutor(endpoint: String, urlParams?: URLSearchParams) {
    let url = `${this.apiUrl}/${endpoint}`

    if(urlParams) {
      url += `/?${urlParams}`
    }

    return url
  }

  get(endpoint: String, urlParams?: URLSearchParams) {
    return this.http.get<any>(this.urlContrutor(endpoint, urlParams));
  }

  post(endpoint: String, body: any, urlParams?: URLSearchParams) {
    return this.http.post<any>(this.urlContrutor(endpoint, urlParams), body);
  }

  
  put(endpoint: String, body: any, urlParams?: URLSearchParams) {
    return this.http.put<any>(this.urlContrutor(endpoint, urlParams), body);
  }

  delete(endpoint: String) {
    return this.http.delete(this.urlContrutor(endpoint));
  }
}
