import {Routes} from "@angular/router";
import {UserListComponent} from "../components/user/user-list/user-list.component";
import {UserEditComponent} from "../components/user/user-edit/user-edit.component";

export const userRoutes: Routes = [{

  path: '',
  component: UserListComponent, pathMatch: 'full',
  title: 'Liste des utilisateurs'
},
  {
    path: 'edit/:id',
    component: UserEditComponent,
    title: 'Edition d\'un utilisateur'
  },
  {
    path: 'new',
    component: UserEditComponent,
    title: 'Création d\'un utilisateur'
  }
]
