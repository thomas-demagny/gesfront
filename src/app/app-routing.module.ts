import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressDetailsComponent } from './address/address-details/address-details.component';
import { AddressListComponent } from './address/address-list/address-list.component';



const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { 
    path: 'address',
     
     children: [ {

      path: 'list',
      component: AddressListComponent
    },
    {
        path: 'test',
        component: AddressDetailsComponent,
      }]
  }
    
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
