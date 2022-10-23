import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Address} from "../models/address";

const baseUrl = 'http://localhost:8080/address';

@Injectable({
  providedIn: 'root'
})

export class AddressService {

  constructor(private http: HttpClient ) { }

  getAll(): Observable<Address[]> {
    return this.http.get(baseUrl) as Observable<Address[]>;
  }

  getAddress(id: number) : Observable<any> {
    return this.http.get(`${baseUrl}/${id}`) ;
  }

  create(address: Address): Observable<any> {
      return this.http.post(baseUrl, address);
  }

  update(id: number, address: Address): Observable<any> {
      return this.http.put(`${baseUrl}/${id}`, address);
  }

  delete(id: number): Observable<any> {
      return this.http.delete(`${baseUrl}/${id}`);
  }
/*
  findByCountry(country: string): Observable<any> {
      return this.http.get(`${baseUrl}?country=` + country);
  }
*/

}
