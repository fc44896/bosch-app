import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import {CUSTOMERS} from '../mock-customers';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.less']
})
export class CustomersComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  customers = CUSTOMERS;
}
