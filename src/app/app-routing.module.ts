import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { addressRoutes } from './routes/address-routes';
import { userRoutes } from "./routes/user-routes";
import { billRoutes } from "./routes/bill-routes";
import { organizationRoutes } from "./routes/organization-routes";
import { phaseRoutes } from "./routes/phase-routes";
import { projectRoutes } from "./routes/project-routes";



const routes: Routes = [
  { path: '', component: HomeComponent,title: 'Home' },
  { path: 'address', children: addressRoutes },
  { path: 'auth/login', component: LoginComponent, title: 'Connexion' },
  { path: 'user', children: userRoutes },
  { path: 'bill', children: billRoutes },
  { path: 'organization', children: organizationRoutes },
  { path: 'phase', children: phaseRoutes },
  { path: 'project', children: projectRoutes },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
