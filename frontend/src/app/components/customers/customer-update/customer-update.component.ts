import {Component, OnInit} from '@angular/core';
import {Customer} from "../../../models/customer.model";
import {ActivatedRoute, Router} from "@angular/router";
import {CustomersService} from "../../../services/customers.service";

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrl: './customer-update.component.css'
})
export class CustomerUpdateComponent  implements OnInit {
  customerId: number=0;
  customer: Customer = { id: 0, name: '', email: '' };

  constructor(private route: ActivatedRoute, private router: Router, private customerService: CustomersService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.customerId = +params['id'];
      this.loadCustomer(this.customerId);
    });
  }

  loadCustomer(id: number) {
      this.customerService.getCustomer(id).subscribe({
       next: (cu) => {
        this.customer = cu;
      },
      error:error => {
        console.error('Error loading customer:', error);
      }
        }
      );

  }

  updateCustomer() {
    this.customerService.updateCustomer(this.customer).subscribe(
      () => {
        this.router.navigate(['/']);
      }
    );
  }
}
