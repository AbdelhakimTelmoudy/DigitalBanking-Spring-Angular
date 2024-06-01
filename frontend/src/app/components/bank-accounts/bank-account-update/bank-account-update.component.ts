import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AccountService} from "../../../services/account.service";

@Component({
  selector: 'app-bank-account-update',
  templateUrl: './bank-account-update.component.html',
  styleUrl: './bank-account-update.component.css'
})
export class BankAccountUpdateComponent  implements OnInit {
  currentAccount: any = {
    type: 'CurrentAccount',
    id: '',
    balance: 0,
    createdAt: new Date(),
    status: null,
    customerDTO: {
      id: 0,
      name: '',
      email: ''
    },
    overDraft: 0
  };
  constructor(private route: ActivatedRoute, private currentAccountService: AccountService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.currentAccount = +params['id'];
      this.loadCurrentAccount(this.currentAccount.id);
    });

  }

  loadCurrentAccount(id:string){
    if (id) {
      this.currentAccountService.getCurrentAccount(id)
        .subscribe(data => {
          this.currentAccount = data;
        }, error => {
          console.error('Error:', error);
        });
    }
  }
  updateCurrentAccount(): void {
    this.currentAccountService.updateCurrentAccount(this.currentAccount.id, this.currentAccount)
      .subscribe(() => {
      }, error => {
        console.error('Error:', error);
      });
  }
}
