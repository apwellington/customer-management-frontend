import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url: string = 'localhost:8080/api/v1/address';

  constructor(private http: HttpClient) {
  }
  // @ts-ignore
  getAddress(): Observable<Object>{
    return this.http.get(this.url);
  }


}
