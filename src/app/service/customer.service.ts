import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../models/Customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

 private urlCustomer: string = 'localhost:8080/api/v1/customer';


  constructor(private http: HttpClient) {
  }

  getCustomers(): Observable<Object>{
    return this.http.get(this.urlCustomer);
  }

  getCustomerByID(id: number): Observable<Object>{
    return this.http.get(`${this.urlCustomer}/${id}`);
  }

  saveCustomer(customer:Customer): Observable<Object>{
    return this.http.post(`${this.urlCustomer}`, customer);
  }

  updateCustomer(customer:Customer): Observable<Object>{
    return this.http.put(`${this.urlCustomer}`, customer);
  }

  deleteCustomer(id: number): Observable<any>{
    return this.http.delete(`${this.urlCustomer}/${id}`);
  }

}
