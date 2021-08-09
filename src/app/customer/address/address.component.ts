import { Component, OnInit } from '@angular/core';
import {Address} from "../../models/Address";
import {AddressService} from "../../service/address.service";

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  addresses: Address[] = [];
  address: Address = null;

  constructor(private addressService: AddressService ) { }

  ngOnInit(): void {
    this.addressService.getAddress().subscribe(
      data => {
        this.addresses = data['data'];
      }, error =>{
        console.error(error);
        this.addresses = [];
      }
    );
  }

  saveCustomer(address: Address): any{
    this.addressService.saveAddress(address).subscribe(
      data => {
        this.address =  data['data'];
        return this.address;
      }, error => {
        console.error(error);
        return null;
      }
    )
  }

  updateAddress(address: Address):any{
    this.addressService.updateAddress(address).subscribe(
      data => {
        this.address =  data['data'];
        return this.address;
      }, error => {
        console.error(error);
        return null;
      }
    )
  }

  deleteAddress(id: number):void{
    this.addressService.deleteAddress(id).subscribe(
      data =>{
        console.info("success")
      }, error => {
        console.error("not found")
      }
    );
  }

  getAddressById(id: number):any{
    this.addressService.getAddressByID(id).subscribe(
      data => {
        this.address =  data['data'];
        return this.address;
      }, error => {
        console.error(error);
        return null;
      }
    )
  }
}
