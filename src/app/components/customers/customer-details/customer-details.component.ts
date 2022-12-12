import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Customer } from 'src/app/model/customer';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.less']
})
export class CustomerDetailsComponent {
  constructor( @Inject(MAT_DIALOG_DATA) public customer: Customer ){}

  logAge(): void {
    console.log( this.customer);
 }
}
