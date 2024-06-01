import { TestBed } from '@angular/core/testing';

import { CurrentAccountService } from './account.service';

describe('CurrentAccountService', () => {
  let service: CurrentAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
