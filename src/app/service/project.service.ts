import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Project } from '../models/project';
import { CrudService } from './crud.service';

const url: string = environment.hostUrl;

@Injectable({
  providedIn: 'root'
})
export class ProjectService extends CrudService<Project> {

  constructor(httpClient: HttpClient) {

    super(httpClient, `${url}/project`);
  }
}
