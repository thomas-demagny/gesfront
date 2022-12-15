import { AuthComponent } from './auth/auth.component';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserEditComponent } from './components/user/user-edit/user-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './core/layout/navbar/navbar.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { ToastrModule } from 'ngx-toastr';
import { BillEditComponent } from './components/bill/bill-edit/bill-edit.component';
import { BillListComponent } from './components/bill/bill-list/bill-list.component';
import { OrganizationListComponent } from './components/organization/organization-list/organization-list.component';
import { OrganizationEditComponent } from './components/organization/organization-edit/organization-edit.component';
import { PhaseEditComponent } from './components/phase/phase-edit/phase-edit.component';
import { PhaseListComponent } from './components/phase/phase-list/phase-list.component';
import { ProjectListComponent } from './components/project/project-list/project-list.component';
import { ProjectEditComponent } from './components/project/project-edit/project-edit.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faTrashCan, faCirclePlus, faFilePen, faEye, faUser } from '@fortawesome/free-solid-svg-icons';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserListComponent,
    UserEditComponent,
    AuthComponent,
    NavbarComponent,
    FooterComponent,
    BillEditComponent,
    BillListComponent,
    OrganizationListComponent,
    OrganizationEditComponent,
    PhaseEditComponent,
    PhaseListComponent,
    ProjectListComponent,
    ProjectEditComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr' }
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {
    constructor(library: FaIconLibrary) {
        library.addIcons(faTrashCan, faCirclePlus, faEye, faFilePen, faUser);
        registerLocaleData(localeFr, 'fr');
    }
}
