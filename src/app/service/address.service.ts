import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Address} from "../models/Address";

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private urlAddress: string = 'localhost:8080/api/v1/address';


  constructor(private http: HttpClient) {
  }

  getAddress(): Observable<Object>{
    return this.http.get(this.urlAddress);
  }

  getAddressByCustomerId(id: number): Observable<Object>{
    return this.http.get(`${this.urlAddress}/customer/${id}`);
  }

  getAddressByID(id: number): Observable<Object>{
    return this.http.get(`${this.urlAddress}/${id}`);
  }

  saveAddress(address:Address): Observable<Object>{
    return this.http.post(`${this.urlAddress}`, address);
  }

  updateAddress(address:Address): Observable<Object>{
    return this.http.put(`${this.urlAddress}`, address);
  }

  deleteAddress(id: number): Observable<any>{
    return this.http.delete(`${this.urlAddress}/${id}`);
  }
}
