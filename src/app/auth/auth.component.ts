import { Component, OnInit } from '@angular/core';
import { AuthService} from "../service/auth.service";
import { AuthFormService } from 'src/app/forms/auth-form.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  username!: string;
  password!: string;
  authForm!: FormGroup;
  errorMessage: string = "C'est pas bon recommence!";
  successMessage: string = 'Vous êtes bien connecté !';
  isAuthenticated!: boolean;
  
  
  
  constructor(
    private authService: AuthService,
    private authFormService: AuthFormService,
    private router: Router,
    private route: ActivatedRoute,
    private toast: ToastrService,
    ) { }

  

  ngOnInit(): void {
    this.authForm = this.authFormService.authForm();
    
    };
  

   handleLogin() {
    this.authService.auth(this.authForm.value.username, this.authForm.value.password).subscribe(
    (res) => {
          this.toast.success(this.successMessage);
          this.router.navigate(['home'])
          .then(() => {
            window.location.reload();
          });
          
          
                   
        }, () => {
          this.toast.error(this.errorMessage);
        } 
    );   
      }
    
    
    handleLogout() {
      this.authService.logout();
      this.toast.success('Vous êtes bien déconnecté !');
      this.router.navigate(['']);
      this.isAuthenticated = false;
    }

  }
   
 

  


