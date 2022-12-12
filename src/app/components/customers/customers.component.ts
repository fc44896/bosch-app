import { Component, OnInit, DefaultIterableDiffer } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Customer, CustomerColumns } from '../../model/customer';
import { CustomerService } from '../../services/customer.service';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.less'],
  animations: [],
})
export class CustomersComponent implements OnInit {
  displayedColumns: string[] = CustomerColumns.map((col) => col.key);
  columnsSchema: any = CustomerColumns;
  dataSource = new MatTableDataSource<Customer>();
  isFilterContract: string = 'all';

  constructor(
    public dialog: MatDialog,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.isFilterContract = 'all';
    this.customerService.getCustomers().subscribe((res: any) => {
      this.dataSource.data = res;
    });
  }

  getDetails(row: Customer) {
    this.dialog.open(CustomerDetailsComponent, { data: row });
  }

  filter(filter: string) {
    this.isFilterContract = filter;
    let  isContractActive: boolean  = true;
    switch(this.isFilterContract){
      case 'true':
        this.customerService.getCustomers().subscribe((res: any) => {
          this.dataSource.data = res.filter(
            (c: Customer) => c.hasContract == isContractActive
          );
        });
        break;
      case 'false':
        isContractActive = false;
        this.customerService.getCustomers().subscribe((res: any) => {
          this.dataSource.data = res.filter(
            (c: Customer) => c.hasContract == isContractActive
          );
        });
        break;
      default:
        
        this.customerService.getCustomers().subscribe((res: any) => {
          this.dataSource.data = res;
        });
    }
    
  }

  removeCustomer(id: number) {
    this.dialog
      .open(ConfirmDialogComponent)
      .afterClosed()
      .subscribe((confirm) => {
        if (confirm) {
          this.customerService.deleteCustomer(id).subscribe(() => {
            this.dataSource.data = this.dataSource.data.filter(
              (c: Customer) => c.id !== id
            );
          });
        }
      });
  }
}
