import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAccountsListComponent } from './bank-accounts-list.component';

describe('BankAccountsListComponent', () => {
  let component: BankAccountsListComponent;
  let fixture: ComponentFixture<BankAccountsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BankAccountsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BankAccountsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
