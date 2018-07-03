import { AbstractControl } from '@angular/forms';

export function PasswordValidate(control: AbstractControl) {    
    let strength = 0;
    let specials = '~!@#$%^&*()_+- ?*,.<>;:';
    let diffChar = 0;

    // Contains special characters
    for (let i = 0; i < control.value.length; i++)
    {
        if (specials.indexOf(control.value.charAt(i)) > -1)
        {
          diffChar = 1;
            break;
        }
    }

    // Contains numbers
    if (/\d/.test(control.value)){
      diffChar += 1;
    }

    // Contains lower case letter
    if (/[a-z]/.test(control.value)){
      diffChar += 1;
    }

    // Contains upper case letter
    if (/[A-Z]/.test(control.value)){
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

    if (control.value.length >= 1){
      strength += 5;
    }
    if (control.value.length >= 6){
      strength += 10;
    }
    if (control.value.length >= 9){
      strength += 20;
    }
    if (control.value.length >= 15){
      strength += 15;
    }

    console.log(strength)
  if (strength > 59) {
    return null;
  } 
  return { validPassword: true };
}