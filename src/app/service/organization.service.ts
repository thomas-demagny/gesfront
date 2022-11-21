import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Organization } from '../models/organization';
import { CrudService } from './crud.service';

const url: string = environment.hostUrl;

@Injectable({
  providedIn: 'root'
})
export class OrganizationService extends CrudService<Organization> {

     constructor(httpClient: HttpClient) {

      super(httpClient, `${url}/organization`);
    }

    
  
}
