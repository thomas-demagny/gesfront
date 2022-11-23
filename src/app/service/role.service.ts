import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CrudService} from "./crud.service";
import {Role} from "../models/role";
import {environment} from "../../environments/environment";

const url: string = environment.hostUrl;

@Injectable({
  providedIn: 'root'
})
export class RoleService extends CrudService<Role> {

  constructor(httpClient: HttpClient) {
    super(httpClient, `${url}/role`);
  }
}


