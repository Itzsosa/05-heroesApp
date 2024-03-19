import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap, map } from 'rxjs';

import { environment } from 'src/environments/environment';

import { Auth } from '../interfaces/auth.interface';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = environment.baseUrl;
  private _auth: Auth | undefined;


  get auth():Auth { // Getter para obtener la información del usuario
    return { ...this._auth! };// Se utiliza el operador spread para romper la referencia y evitar que se modifique el objeto original
  }

  constructor(private http: HttpClient) {}

  verificarAutenticacion(): Observable<boolean> { // i could use a pipe with | boolean in the type of the function
    if (!localStorage.getItem('token')) {
      return of(false);
    }

    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
    .pipe( 
      map( auth => {
        this._auth = auth;
        return true;
      })
    );
  }

  login() {
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
    .pipe( 
      tap( auth => this._auth = auth),
      tap( auth => localStorage.setItem('token', auth.id))
    );
  }

  logout() {
    this._auth = undefined; // Se limpia la información del usuario
  }
  
}
