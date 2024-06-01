import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomersComponent} from "./components/customers/customers.component";
import {CustomersTableComponent} from "./components/customers/customers-table/customers-table.component";
import {CustomerNewComponent} from "./components/customers/customer-new/customer-new.component";
import {CustomerUpdateComponent} from "./components/customers/customer-update/customer-update.component";
import {BankAccountsComponent} from "./components/bank-accounts/bank-accounts.component";
import {BankAccountsListComponent} from "./components/bank-accounts/bank-accounts-list/bank-accounts-list.component";
import {BankAccountNewComponent} from "./components/bank-accounts/bank-account-new/bank-account-new.component";
import {BankAccountUpdateComponent} from "./components/bank-accounts/bank-account-update/bank-account-update.component";
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {authGuard} from "./guards/auth.guard";
import {AdminTemplateComponent} from "./components/admin-template/admin-template.component";


const routes: Routes = [
  {
    path: 'admin',
    component: AdminTemplateComponent,
    canActivate: [authGuard],
    children: [
      { path: '', component: HomeComponent, canActivate: [authGuard] },
      {
        path: 'customers',
        component: CustomersComponent,
        canActivate: [authGuard],
        children: [
          { path: '', component: CustomersTableComponent, canActivate: [authGuard] },
          { path: 'new', component: CustomerNewComponent, canActivate: [authGuard] },
          { path: 'update/:id', component: CustomerUpdateComponent, canActivate: [authGuard] },
        ]
      },
      {
        path: 'bank-accounts',
        component: BankAccountsComponent,
        canActivate: [authGuard],
        children: [
          { path: '', component: BankAccountsListComponent, canActivate: [authGuard] },
          { path: 'new', component: BankAccountNewComponent, canActivate: [authGuard] },
          { path: 'update/:id', component: BankAccountUpdateComponent, canActivate: [authGuard] },
        ]
      },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'admin' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

