import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';

import { ApiRestService } from './api-rest.service';
import { User } from './../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private api: ApiRestService,
    private router: Router
  ) { }

  logar(formLogin: User): Observable<any> {
    return this.api.post("auth/login", formLogin).pipe(
      tap((response) => {
        const token = response['access_token'];
        if (token) {
          localStorage.setItem('token', btoa(JSON.stringify(token)));
          this.router.navigate(['']);
          return true;
        }else{
          return false;
        }        
      }));
  }

  deslogar() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

  refresh(): Observable<any> {
    return this.api.post("auth/refresh", {}).pipe(
      tap((response) => {
        const token = response['access_token'];
        console.log(response);
        if (token) {
          localStorage.setItem('token', btoa(JSON.stringify(token)));
        }else{
          this.deslogar();
          throwError('Unauthorized');
        }        
      }));
  }

  get obterTokenUsuario(): string | null {
    const token = localStorage.getItem('token');

    return localStorage.getItem('token')
      ? JSON.parse(atob(localStorage.getItem('token')!))
      : null;
  }

  get logado(): boolean {
    return localStorage.getItem('token') ? true : false;
  }
}
