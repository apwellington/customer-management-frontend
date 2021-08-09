import { Component, OnInit } from '@angular/core';
import {Customer} from '../models/Customer';
import {ServiceService} from "../service.service";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit{

  customers: Customer[] = [];


  constructor(private service:ServiceService ) { }

  ngOnInit(): void {
    this.service.getAddress().subscribe(
      response => console.log(response)
    );
  }

}
