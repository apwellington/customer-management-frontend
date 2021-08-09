import {Customer} from './Customer';

export class Address{
    id: number;
    name: string;
    lineOne: string;
    lineTwo: string;
    city: string;
    region: string;
    zipcode: string;
    country: string;
    status: string;
    customer: Customer;


  constructor(id: number, name: string, lineOne: string, lineTwo: string,
              city: string, region: string, zipcode: string, country: string,
              status: string, customer: Customer)
  {
    this.id = id;
    this.name = name;
    this.lineOne = lineOne;
    this.lineTwo = lineTwo;
    this.city = city;
    this.region = region;
    this.zipcode = zipcode;
    this.country = country;
    this.status = status;
    this.customer = customer;
  }
}
