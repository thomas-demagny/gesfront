import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user";
import {environment} from "../../environments/environment";
import {CrudService} from "./crud.service";


@Injectable({
  providedIn: 'root'
})
export class UserService extends CrudService<User> {

  constructor(httpClient: HttpClient) {
    const url: string = environment.hostUrl;
    super(httpClient, `${url}/user`);
  }

}
