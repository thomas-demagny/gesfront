import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Address } from "../models/address";
import { environment } from "../../environments/environment";
import {CrudService} from "./crud.service";

const url: string = environment.hostUrl;

@Injectable({
  providedIn: 'root'
})

export class AddressService extends CrudService<Address> {

  constructor(httpClient: HttpClient) {

    super(httpClient, `${url}/address`);
  }
/*
  findByEmployeeId(id: number): Observable<Address[]> {
    return this.httpClient.get<Address[]>(`${url}/user/${id}`);
  }


  findByCountry(country: string): Observable<any> {
      return this.http.get(`${url}?country=` + country);
  }
*/

}
