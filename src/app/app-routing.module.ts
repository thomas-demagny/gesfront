import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { addressRoutes } from './routes/address-routes';



const routes: Routes = [
  { path: '', component: HomeComponent,
    title: 'Home'
  },
  { path: 'address', children: addressRoutes },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
