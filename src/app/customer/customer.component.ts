import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../service/customer.service";
import {Customer} from "../models/Customer";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit{

  customers: Customer[] = [];
  customer: Customer = null;

  constructor(private customerService: CustomerService ) { }

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe(
      data => {
        this.customers = data['data'];
      }, error =>{
        console.error(error);
        this.customers = [];
      }
    );
  }

  saveCustomer(customer: Customer): any{
    this.customerService.saveCustomer(customer).subscribe(
      data => {
        this.customer =  data['data'];
        return this.customer;
      }, error => {
        console.error(error);
        return null;
      }
    )
  }

  updateCustomer(customer: Customer):any{
    this.customerService.updateCustomer(customer).subscribe(
      data => {
        this.customer =  data['data'];
        return this.customer;
      }, error => {
        console.error(error);
        return null;
      }
    )
  }

  deleteCustomer(id: number):void{
    this.customerService.deleteCustomer(id).subscribe(
      data =>{
        console.info("success")
      }, error => {
        console.error("not found")
      }
    );
  }

  getCustomerById(id: number):any{
    this.customerService.getCustomerByID(id).subscribe(
      data => {
        this.customer =  data['data'];
        return this.customer;
      }, error => {
        console.error(error);
        return null;
      }
    )
  }



}
