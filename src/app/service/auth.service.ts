import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login!: string;
  password!: string;

  constructor(private http: HttpClient) {

  }

  log = (login: string, password: string) => this.http.get(environment.hostUrl + `/login`,
    {headers: {authorization: this.createBasicAuthToken(login, password)}}).pipe(map((res) => {
    this.login = login;
    this.password = password;
    this.registerSuccessfulLogin(login, password);
  }));

  createBasicAuthToken(login: string, password: string) {
    return 'Basic ' + window.btoa(login + ":" + password);
  }

  registerSuccessfulLogin(login: string, password: string) {
    this.login = login;
    this.password = password;
    // save the username to session
  }
}
