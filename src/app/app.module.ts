import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressListComponent } from './components/address/address-list/address-list.component';
import { AddressEditComponent } from './components/address/address-edit/address-edit.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from "@angular/common/http";
import { EmployeeListComponent } from './components/employee/employee-list/employee-list.component';
import { EmployeeEditComponent } from './components/employee/employee-edit/employee-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    AddressListComponent,
    AddressEditComponent,
    EmployeeListComponent,
    EmployeeEditComponent,
    HomeComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
