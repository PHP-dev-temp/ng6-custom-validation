import { PasswordStrengthValidatorService } from './password-strength-validator.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidate } from './password.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  passwordForm: FormGroup;
  password = '';
  strength = 0;
  status = false;
  strengthWidth = 0;
  strengthColor = 'red';

  constructor(
    private formBuilder: FormBuilder, 
    private passwordStrenghtValidator:PasswordStrengthValidatorService
  ) { }

  ngOnInit() {
      this.passwordForm = this.formBuilder.group({
          password: ['', [
            Validators.required, 
            Validators.minLength(6), 
            PasswordValidate]]
      });

      this.passwordForm.statusChanges.subscribe(
        (status) => {
            this.status = status === 'VALID';
            console.log(this.status);
            this.password = this.passwordForm.controls['password'].value;
            this.strength = this.passwordStrenghtValidator.validate(this.password);
            this.strengthWidth = this.strength;
            if (this.strength > 79){
              this.strengthColor = 'green';
            } else if (this.strength > 59){
              this.strengthColor = 'yellow';
            } else {
              this.strengthColor = 'red';
            }
        }
      );
  }
  


  onSubmit() {
      // stop here if form is invalid
      if (this.passwordForm.invalid) {
          return;
      }
      alert(this.password + ' is a nice password :-)');
  }
}

