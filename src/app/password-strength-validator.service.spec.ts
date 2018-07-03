import { TestBed, inject } from '@angular/core/testing';

import { PasswordStrengthValidatorService } from './password-strength-validator.service';

describe('PasswordStrengthValidatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PasswordStrengthValidatorService]
    });
  });

  it('should be created', inject([PasswordStrengthValidatorService], (service: PasswordStrengthValidatorService) => {
    expect(service).toBeTruthy();
  }));
});
