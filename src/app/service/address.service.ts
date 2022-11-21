import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Address } from "../models/address";
import { environment } from "../../environments/environment";
import {CrudService} from "./crud.service";
import { Observable } from 'rxjs';

const url: string = environment.hostUrl;

@Injectable({
  providedIn: 'root'
})

export class AddressService extends CrudService<Address> {

  constructor(httpClient: HttpClient) {

    super(httpClient, `${url}/address`);
  }

  


  

}
