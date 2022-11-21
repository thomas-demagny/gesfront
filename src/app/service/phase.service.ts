import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Phase } from '../models/phase';
import { CrudService } from './crud.service';

const url: string = environment.hostUrl;

@Injectable({
  providedIn: 'root'
})
export class PhaseService extends CrudService<Phase> {

  constructor(httpClient: HttpClient) {

    super(httpClient, `${url}/phase`);
  }
}
