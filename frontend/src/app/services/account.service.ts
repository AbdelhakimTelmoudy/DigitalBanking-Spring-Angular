import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {BankAccount} from "../models/bankAccount.model";
import {RequestBankAccount} from "../models/requestBankAccount.model";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private apiUrl = 'http://localhost:8082/api/accounts';

  constructor(private http: HttpClient) {}

  createSavingBankAccount(requestBankAccount: RequestBankAccount): Observable<BankAccount> {
    return this.http.post<BankAccount>(`${this.apiUrl}/saveSavingBankAccount`, requestBankAccount);
  }

  createCurrentBankAccount(requestBankAccount: RequestBankAccount): Observable<BankAccount> {
    return this.http.post<BankAccount>(`${this.apiUrl}/saveCurrentBankAccount`, requestBankAccount);
  }

  getCurrentAccount(id: string): Observable<BankAccount> {
    return this.http.get<BankAccount>(`${this.apiUrl}/${id}`);
  }

  updateCurrentAccount(id: string, currentAccount: BankAccount): Observable<BankAccount> {
    return this.http.put<BankAccount>(`${this.apiUrl}/${id}`, currentAccount);
  }

  deleteCurrentAccount(id: string): Observable<BankAccount> {
    return this.http.delete<BankAccount>(`${this.apiUrl}/${id}`);
  }

  getAllCurrentAccounts(): Observable<BankAccount[]> {
    return this.http.get<BankAccount[]>(`${this.apiUrl}`);

  }
}
