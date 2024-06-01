import {Component, OnInit} from '@angular/core';
import {BankAccount} from "../../../models/bankAccount.model";
import {AccountService} from "../../../services/account.service";
import {Customer} from "../../../models/customer.model";

@Component({
  selector: 'app-bank-accounts-list',
  templateUrl: './bank-accounts-list.component.html',
  styleUrl: './bank-accounts-list.component.css'
})
export class BankAccountsListComponent implements OnInit {
  currentAccounts: BankAccount[] = [];
  loading = true;
  totalAccount = 0;
  pageSize = 10;
  currentPage = 1;
  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.loadCurrentAccounts()
  }

  deleteCurrentAccount(id: string): void {
    this.accountService.deleteCurrentAccount(id)
      .subscribe(() => {
        this.loadCurrentAccounts();
      }, error => {
        console.error('Error:', error);
      });
  }
  loadCurrentAccounts() {
    this.accountService.getAllCurrentAccounts()
      .subscribe({
        next:bankAccount => {
          this.totalAccount = bankAccount.length;
          this.currentAccounts = this.paginateAccount(bankAccount);
          this.loading = false;
        },
        error:error => {
          console.error('Error:', error);
          this.loading = false;
        }
      });
  }

  paginateAccount(accounts: BankAccount[]): BankAccount[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = Math.min(startIndex + this.pageSize, accounts.length);
    return accounts.slice(startIndex, endIndex);
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.loadCurrentAccounts();
  }

}
