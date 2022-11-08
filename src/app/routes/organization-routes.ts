import { Routes } from "@angular/router";
import {OrganizationEditComponent} from "../components/organization/organization-edit/organization-edit.component";
import {OrganizationListComponent} from "../components/organization/organization-list/organization-list.component";



export const organizationRoutes: Routes = [{

  path: '',
  component: OrganizationListComponent, pathMatch: 'full',
  title: 'Liste des entreprises'
},
  {
    path: 'edit/:id',
    component: OrganizationEditComponent,
    title: 'Edition de l\'entreprise'
  },
]
