import {Routes} from "@angular/router";
import {AddressEditComponent} from "../components/address/address-edit/address-edit.component"
import {AddressListComponent} from "../components/address/address-list/address-list.component"


export const addressRoutes: Routes = [{

  path: '',
  component: AddressListComponent, pathMatch: 'full',
  title: 'Liste des adresses'
},
  {
    path: 'new',
    component: AddressEditComponent,
    title: 'Création d\'une adresse'
  },
  {
    path: 'edit/:id',
    component: AddressEditComponent,
    title: 'Edition de l\'adresse'
  },
];
