import {Routes} from "@angular/router";
import {EmployeeListComponent} from "../components/employee/employee-list/employee-list.component";
import {EmployeeEditComponent} from "../components/employee/employee-edit/employee-edit.component";

export const employeeRoutes: Routes = [{

  path: '',
  component: EmployeeListComponent, pathMatch: 'full',
  title: 'Liste des employées'
},
  {
    path: 'edit/:id',
    component: EmployeeEditComponent,
    title: 'Edition d\'un employé'
  },
]
