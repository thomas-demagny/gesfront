import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  username!:string;
  isAuthenticated: boolean = false;
  
  
  constructor(
     private authService: AuthService,
     private toast: ToastrService,
      private router: Router,
      ) { }
     

  ngOnInit(): void {
    this.log();
  }

 
  log() {
    this.username = sessionStorage.getItem('username')!
    this.isAuthenticated = true;
  }

  handleLogout() {
    this.authService.logout();
    this.toast.success('Vous êtes bien déconnecté !');
    this.router.navigate(['']);
    this.isAuthenticated = false;
  }

  



}
