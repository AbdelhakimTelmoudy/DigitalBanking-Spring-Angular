import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import en from '@angular/common/locales/en';
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzModalModule} from "ng-zorro-antd/modal";
import {NzPaginationModule} from "ng-zorro-antd/pagination";
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import {NzSelectModule} from "ng-zorro-antd/select";
import {CustomersComponent} from "./components/customers/customers.component";
import {CustomersTableComponent} from "./components/customers/customers-table/customers-table.component";
import {CustomerNewComponent} from "./components/customers/customer-new/customer-new.component";
import {CustomerUpdateComponent} from "./components/customers/customer-update/customer-update.component";
import {BankAccountsComponent} from "./components/bank-accounts/bank-accounts.component";
import {BankAccountsListComponent} from "./components/bank-accounts/bank-accounts-list/bank-accounts-list.component";
import {BankAccountNewComponent} from "./components/bank-accounts/bank-account-new/bank-account-new.component";
import {BankAccountUpdateComponent} from "./components/bank-accounts/bank-account-update/bank-account-update.component";
import { AdminTemplateComponent } from './components/admin-template/admin-template.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import {NzAvatarModule} from "ng-zorro-antd/avatar";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomersTableComponent,
    CustomerNewComponent,
    CustomerUpdateComponent,
    BankAccountsComponent,
    BankAccountsListComponent,
    BankAccountNewComponent,
    BankAccountUpdateComponent,
    AdminTemplateComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    NzAvatarModule,
    ReactiveFormsModule ,
    FormsModule,
    NzButtonModule,
    NzInputModule,
    NzTableModule,
    NzSelectModule,
    NzFormModule,
    NzModalModule,
    BrowserModule,
    NzDatePickerModule,
    AppRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzTableModule,
    NzButtonModule,
    NzFormModule,
    BrowserModule,
    NzTableModule,
    FormsModule,
    NzPaginationModule

  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
