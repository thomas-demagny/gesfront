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
  

  constructor(private http: HttpClient) { }

  auth = (login: string, password: string) => this.http.post(environment.hostUrl + `/auth/signin`,
    {
      headers: {authorization: this.createBasicAuthToken(login, password)}}).pipe(map((res) => {
    this.login = login;
    this.password = password;
    this.registerSuccessfulLogin(login, password);
  })
  );

  createBasicAuthToken(login: string, password: string) {
     return 'Basic ' + window.btoa(login + ":" + password);
  }

  registerSuccessfulLogin(login: string, password: string) {
    this.login = login;
    this.password = password;
    sessionStorage.setItem('token', window.btoa(login + ":" + password));
    // save the username to session
  }

  logout() {
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('username');
      this.login = '';
      this.password = '';
  }
}