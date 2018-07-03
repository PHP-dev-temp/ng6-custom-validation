import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordStrengthValidatorService {

  constructor() { }

  validate(password){
    let strength = 0;
    let specials = '~!@#$%^&*()_+- ?*,.<>;:';
    let diffChar = 0;

    // Contains special characters
    for (let i = 0; i < password.length; i++)
    {
        if (specials.indexOf(password.charAt(i)) > -1)
        {
          diffChar = 1;
            break;
        }
    }

    // Contains numbers
    if (/\d/.test(password)){
      diffChar += 1;
    }

    // Contains lower case letter
    if (/[a-z]/.test(password)){
      diffChar += 1;
    }

    // Contains upper case letter
    if (/[A-Z]/.test(password)){
      diffChar += 1;
    }

    switch(diffChar) { 
      case 1: { 
        strength += 9;
         break; 
      } 
      case 2: { 
        strength += 15;
         break; 
      } 
      case 3: { 
        strength += 30;
         break; 
      } 
      case 4: { 
        strength += 50;
         break; 
      } 
      default: { 
         break; 
      } 
    } 

    if (password.length >= 1){
      strength += 5;
    }
    if (password.length >= 6){
      strength += 10;
    }
    if (password.length >= 9){
      strength += 20;
    }
    if (password.length >= 15){
      strength += 15;
    }

    return strength;
  }
}
