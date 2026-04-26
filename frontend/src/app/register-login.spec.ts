import { TestBed } from '@angular/core/testing';

import { RegisterLogin } from './register-login';

describe('RegisterLogin', () => {
  let service: RegisterLogin;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterLogin);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
