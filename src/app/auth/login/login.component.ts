import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login!: string;
  password!: string;
  errorMessage!: "C'est pas bon !";
  successMessage: string = 'C\'est bon !';
  invalidLogin: boolean = false;
  loginSuccess: boolean = false;


  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  handleLogin() {
    this.authService.log(this.login, this.password).pipe(map((res) => {
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful.';

    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    }))
  };


}
