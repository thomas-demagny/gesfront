import {Routes} from "@angular/router";
import {PhaseListComponent} from "../components/phase/phase-list/phase-list.component";
import {PhaseEditComponent} from "../components/phase/phase-edit/phase-edit.component";


export const phaseRoutes: Routes = [{

  path: '',
  component: PhaseListComponent, pathMatch: 'full',
  title: 'Liste des phases'
},
  {
    path: 'edit/:id',
    component: PhaseEditComponent,
    title: 'Edition de la phase'
  },
]
