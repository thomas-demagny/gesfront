import { Routes } from "@angular/router";
import { BillListComponent } from "../components/bill/bill-list/bill-list.component";
import { BillEditComponent } from "../components/bill/bill-edit/bill-edit.component";


export const billRoutes: Routes = [{

  path: '',
  component: BillListComponent, pathMatch: 'full',
  title: 'Liste des factures'
},
  {
    path: 'edit/:id',
    component: BillEditComponent,
    title: 'Edition de facture'
  },
  {
    path: 'new',
    component: BillEditComponent,
    title: 'Création d\'une facture'
  }
]
