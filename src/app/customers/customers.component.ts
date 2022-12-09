import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

import { Customer } from '../customer';
import {CUSTOMERS} from '../mock-customers';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.less'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class CustomersComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  dataSource = CUSTOMERS;
  columnsToDisplay = ['firstName', 'lastName', 'birthDate', 'id'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: Customer = {
    id: -1,
    firstName: '',
    lastName: '',
    birthDate: new Date,
    email: '',
    avatar: '',
    hasContract: false,
  };

}
export class TableExpandableRowsExample {
  
}