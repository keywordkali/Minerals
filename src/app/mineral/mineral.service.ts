import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mineral } from './mineral.class';

@Injectable({
  providedIn: 'root'
})
export class MineralService {
  baseurl1: string = "http://localhost:8080/api/minerals/"

  constructor(
    private http: HttpClient
  ) { }
  list(): Observable <Mineral[]> {

    return this.http.get(`${this.baseurl1}`) as Observable<Mineral[]>;
  }
  get(id: number): Observable<Mineral> {
    return this.http.get(`${this.baseurl1}${id}`) as Observable<Mineral>;
  }
  create(mineral:Mineral): Observable<Mineral>{
  return this.http.post(`${this.baseurl1}`,mineral) as Observable<Mineral>;
  }
  change(mineral:Mineral): Observable<any>{
    return this.http.put(`${this.baseurl1}${mineral.id}`,mineral) as Observable<Mineral>;
  }
  remove(mineral: Mineral):Observable<Mineral>{
  return this.http.delete(`${this.baseurl1}${mineral.id}`) as Observable<Mineral>;
  }
  

}
