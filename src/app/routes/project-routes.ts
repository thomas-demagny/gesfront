import { Routes } from "@angular/router";
import { ProjectListComponent } from "../components/project/project-list/project-list.component";
import { ProjectEditComponent } from "../components/project/project-edit/project-edit.component";


export const projectRoutes: Routes = [{

  path: '',
  component: ProjectListComponent, pathMatch: 'full',
  title: 'Liste des projets'
},
  {
    path: 'edit/:id',
    component: ProjectEditComponent,
    title: 'Edition du projet'
  },
  {
    path: 'new',
    component: ProjectEditComponent,
    title: 'Création d\'un projet'
  }
]
