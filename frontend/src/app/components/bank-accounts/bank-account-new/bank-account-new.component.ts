import {Component} from '@angular/core';
import {BankAccount} from "../../../models/bankAccount.model";
import {RequestBankAccount} from "../../../models/requestBankAccount.model";
import {AccountService} from "../../../services/account.service";

@Component({
  selector: 'app-bank-account-new',
  templateUrl: './bank-account-new.component.html',
  styleUrl: './bank-account-new.component.css'
})
export class BankAccountNewComponent {

  isLoading = false;
   type:string = "CurrentAccount";

   requestBankAccount: RequestBankAccount = {
    initialBalance: 0.0,
    overDraft: 500.00,
    customerId: 1,
    interestRate: 3.5
  };

  constructor(private currentAccountService: AccountService) {}



  createCurrentAccount(): void {
   if(this.type=="SavingAccount"){
     this.isLoading = true;
     this.currentAccountService.createSavingBankAccount(this.requestBankAccount)
       .subscribe({
         next:() => {
           this.isLoading = false;
         },
         error:error => {
           console.error('Error:', error);
           this.isLoading = false;
         }
       });
   }
    if(this.type=="CurrentAccount"){
      this.isLoading = true;
      this.currentAccountService.createCurrentBankAccount(this.requestBankAccount)
        .subscribe({
          next:() => {
            this.isLoading = false;
          },
          error:error => {
            console.error('Error:', error);
            this.isLoading = false;
          }
        });
    }
  }
}
