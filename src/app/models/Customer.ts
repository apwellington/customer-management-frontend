import {Address} from './Address';

export class Customer{
  id: number;
  name: string;
  lastName: string;
  email: string;
  status: boolean;
  phone: string;
  address: Address[];


  constructor(id: number, name: string, lastName: string, email: string, status: boolean, phone: string, address: Address[]) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.status = status;
    this.phone = phone;
    this.address = address;
  }


}
