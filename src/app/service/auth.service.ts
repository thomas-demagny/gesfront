import { Request } from './../models/credentials/request';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  username!: string;
  password!: string;
  credentials!: Request
    

  constructor(private http: HttpClient) { }


  auth = (username: string, password: string) => {
    this.credentials = new Request();
    this.credentials.username = username;
    this.credentials.password = password;
    console.log(this.credentials)
    return this.http.post(
      environment.hostUrl + `/auth/signin`,
      this.credentials,
      {
        headers: { authorization: this.createBasicAuthToken(username, password) }
      })
      .pipe(map((res) => {
        this.registerSuccessfulLogin(username, password);
      })
      );
  }
      
  createBasicAuthToken(username: string, password: string) {
    return 'Basic ' + window.btoa(username + ":" + password);
  }

  registerSuccessfulLogin(username: string, password: string) {
    this.username = username;
    this.password = password;
    sessionStorage.setItem('token', window.btoa(username + ":" + password));
    sessionStorage.setItem('username', username);
    
    
    // save the username to session
  }

  logout() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('username');
    this.username = '';
    this.password = '';
    
  }

  isAuthenticated() {
    return sessionStorage.getItem('token') !== null;
  }


} 