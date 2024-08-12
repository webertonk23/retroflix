import { Injectable } from '@angular/core';
import { ApiRestService } from './api-rest.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsoleService {
  endpoint = 'console';

  constructor(
    private api: ApiRestService
  ) { }

  getConsoles(): Observable<any> {
    return this.api.get(this.endpoint);
  }

  getConsole(id: string | number): Observable<any> {
    return this.api.get(`${this.endpoint}/${id}`);
  }  

}
