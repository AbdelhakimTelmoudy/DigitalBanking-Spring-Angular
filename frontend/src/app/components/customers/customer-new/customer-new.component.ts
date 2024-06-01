import {Component, OnInit} from '@angular/core';
import {Customer} from "../../../models/customer.model";
import {Router} from "@angular/router";
import {CustomersService} from "../../../services/customers.service";

@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html',
  styleUrl: './customer-new.component.css'
})
export class CustomerNewComponent implements OnInit {
  newCustomer: Customer = {
    id: 0,
    name: '',
    email: ''
  };

  constructor(private router: Router, private customerService: CustomersService) { }

  ngOnInit() {
  }

  addCustomer() {
    this.customerService.addCustomer(this.newCustomer).subscribe(
      () => {
        this.router.navigate(['/']);
      },
      error => {
        console.error('Error adding customer:', error);
      }
    );
  }
}
