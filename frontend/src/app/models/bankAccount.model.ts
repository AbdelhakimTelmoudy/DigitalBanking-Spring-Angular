import {Customer} from "./customer.model";

export interface BankAccount {
  type: string;
  id: string;
  balance: number;
  createdAt: string;
  status: string | null;
  customerDTO: Customer;
  overDraft: number;
}
