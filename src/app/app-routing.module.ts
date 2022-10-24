import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { addressRoutes } from './routes/address-routes';
import {employeeRoutes} from "./routes/employee-routes";



const routes: Routes = [
  { path: '', component: HomeComponent,title: 'Home' },
  { path: 'address', children: addressRoutes },
  { path: 'auth/login', component: LoginComponent, title: 'Connexion' },
  { path: 'employee', children: employeeRoutes },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
