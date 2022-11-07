import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "../models/employee";
import {environment} from "../../environments/environment";

const baseUrl = environment.hostUrl + `/user`;

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient ) {}


  getAll(): Observable<Employee[]> {
    return this.http.get(baseUrl) as Observable<Employee[]>;
  }

  getEmployee(id: number) : Observable<any> {
    return this.http.get(`${baseUrl}/${id}`) ;
  }

  create(employee: Employee): Observable<any> {
      return this.http.post(baseUrl, employee);
  }

  update(id: number, employee: Employee): Observable<any> {
      return this.http.put(`${baseUrl}/${id}`, employee);
  }

  delete(id: number): Observable<any> {
      return this.http.delete(`${baseUrl}/${id}`);
  }

  
}
