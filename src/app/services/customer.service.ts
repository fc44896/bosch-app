import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { Customer } from '../model/customer';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private serviceUrl = 'https://620e9760ec8b2ee28326ae84.mockapi.io/api/1/users';

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<Customer[]> {
    return this.http
      .get(this.serviceUrl)
      .pipe<Customer[]>(map((data: any) => {
        const cosArr: Customer[] = [];
        
        for (const cos in data){
            
            let customer: Customer= {
              id: data[cos].id,
              firstName: data[cos].firstName,
              lastName: data[cos].lastName,
              birthDate: data[cos].birthDate,
              email: data[cos].email,
              avatar: data[cos].avatar,
              hasContract: data[cos].hasContract,
              isBirthday: false
            };

            if(new Date(customer.birthDate).getMonth() == new Date().getMonth()){
              customer.isBirthday= true;
            }
            cosArr.push(customer);
        }
        
        return cosArr;
      }));
  }


  deleteCustomer(id: number): Observable<Customer> {
    return this.http.delete<Customer>(`${this.serviceUrl}/${id}`);
  }

}
