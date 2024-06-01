import {Component, OnInit} from '@angular/core';
import {Customer} from "../../../models/customer.model";
import {CustomersService} from "../../../services/customers.service";
import {NzMessageService} from "ng-zorro-antd/message";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customers-table',
  templateUrl: './customers-table.component.html',
  styleUrl: './customers-table.component.css'
})
export class CustomersTableComponent   implements OnInit {
  customers: Customer[] = [];
  totalCustomers = 0;
  pageSize = 10;
  currentPage = 1;

  constructor(private router: Router,private customerService: CustomersService, private message: NzMessageService) { }

  ngOnInit() {
    this.loadCustomers();
  }


  deleteCustomer(customer: Customer) {
    this.customerService.deleteCustomer(customer.id).subscribe(
      () => {
        this.loadCustomers();
        this.message.success('Customer deleted successfully');
      },
      error => {
        console.error('Error deleting customer:', error);
        this.message.error('Failed to delete customer');
      }
    );
  }
  editCustomer(customer: Customer) {
    this.router.navigate(['/customers/update', customer.id]);
  }

  AddCustomer() {
    this.router.navigate(['/customers/new']);

  }
  loadCustomers() {
    this.customerService.getCustomers().subscribe(
      customers => {
        this.totalCustomers = customers.length;
        this.customers = this.paginateCustomers(customers);
      },
      error => {
        console.error('Error loading customers:', error);
      }
    );
  }

  paginateCustomers(allCustomers: Customer[]): Customer[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = Math.min(startIndex + this.pageSize, allCustomers.length);
    return allCustomers.slice(startIndex, endIndex);
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.loadCustomers();
  }
}
