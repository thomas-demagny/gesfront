import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export abstract class CrudService<C> {

  constructor(
    protected httpClient: HttpClient,
    protected urls: String) {}

  create(item: C): Observable<C> {
    return this.httpClient.post<C>(`${this.urls}/new`, item)
  }

  update(item: C, id: any): Observable<C> {
    return this.httpClient.put<C>(`${this.urls}/${id}`, item)
  }

  delete(id: any): Observable<C> {
    return this.httpClient.delete<C>(`${this.urls}/${id}`)
  }

  getAll(): Observable<C[]> {
    return this.httpClient.get<C[]>(`${this.urls}`)
  }

  getById(id: number): Observable<C> {
    return this.httpClient.get<C>(`${this.urls}/${id}`);
  }

}
