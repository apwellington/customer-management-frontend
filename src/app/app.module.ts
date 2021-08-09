import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { AddressComponent } from './customer/address/address.component';
import { NavComponent } from './customer/nav/nav.component';
import { ContentComponent } from './customer/content/content.component';
import { DetailComponent } from './customer/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    AddressComponent,
    NavComponent,
    ContentComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
