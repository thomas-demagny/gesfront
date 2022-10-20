import { Routes } from "@angular/router";
import { AddressDetailsComponent } from "../address/address-details/address-details.component"
import { AddressListComponent } from "../address/address-list/address-list.component"


export const addressRoutes: Routes = [ {
    
  
      path: 'list',
      component: AddressListComponent
    },
    {
        path: 'details',
        component: AddressDetailsComponent,
      }]
   
