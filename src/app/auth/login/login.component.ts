import { Component, OnInit } from '@angular/core';
import { AuthService} from "../../service/auth.service";
import { AuthFormService } from 'src/app/forms/auth-form.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username!: string;
  password!: string;
  authForm!: FormGroup;
  errorMessage!: "C'est pas bon !";
  successMessage: string = 'C\'est bon !';
  invalidLogin: boolean = false;
  loginSuccess: boolean = false;


  constructor(
    private authService: AuthService,
    private authFormService: AuthFormService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    ) { }

  

  ngOnInit(): void {
    this.authForm = this.authFormService.authForm();
    
    };
  

  get f() {
    return this.authForm.controls;
  }

  handleLogin() {
    this.authService.auth(this.username, this.password).subscribe(
      (res) => {
        this.toastr.success(this.successMessage);
        this.router.navigate(['/user']);
        this.loginSuccess = true;
        this.invalidLogin = (false);
      }
    );
    
    /*.pipe(map((res) => {
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful.';

    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    })).subscribe();*/
  };

  

}
