import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Pipe({
  name: 'formError',
  pure: false
})
export class FormErrorPipe implements PipeTransform {

  transform(control: AbstractControl, fieldName: string = 'Field'): any {
    // console.log(control.errors);
    // Custom Error messages
    if (control.hasError('custom')) {
      return control.errors['custom'];
    }
    // Required Error
    if (control.hasError('required')) {
      return `${fieldName} is required.`;
    }

    // Email Error
    if (control.hasError('email')) {
      return `${fieldName} is not valid.`;
    }

    // Number Error
    if (control.hasError('number')) {
      return `${fieldName} is not a valid number.`;
    }
    // Number Error
    if (control.hasError('pin')) {
      return `${fieldName} is not  valid.`;
    }

    if (control.hasError('country')){
      return `${fieldName} is not valid`;
    }
    // Min Length Error
    if (control.hasError('minlength')) {
      return `${fieldName} length should be at least ${control.getError('minlength').requiredLength}`;
    }

    // Max Length Error
    if (control.hasError('maxlength')) {
      return `${fieldName} length should be less than ${control.getError('maxlength').requiredLength}`;
    }

    // Min Error
    if (control.hasError('min')) {
      return `${fieldName} should be equal or greater than ${control.getError('min').min}`;
    }

    // Max Error
    if (control.hasError('max')) {
      return `${fieldName} should be equal or less than ${control.getError('max').max}`;
    }


    // Confirm Password match
    // console.log(control.errors);
    if (control.hasError('compare')) {
      let message = null, error = control.getError('compare');
      switch (error.type) {
        case 'MATCH': {
          message = `${fieldName} do not match with ${error.field}`;
          break;
        }
        case 'LOWER': {
          message = `${fieldName} should be lower than ${error.field}`;
          break;
        }
        case 'HIGHER': {
          message = `${fieldName} should be higher than ${error.field}`;
          break;
        }
        default : {
          message = `Comparison failed with field ${error.field}`;
          break;
        }
      }
      return message;
    }

    // White space
    if (control.hasError('whiteSpace')) {
      return `${fieldName} should not contain white spaces`;
    }

    // valid url
    if (control.hasError('url')) {
      return `${fieldName} is not a valid url.`;
    }
    if (control.hasError('password')) {
      return `${fieldName} must contain at least one special char, number, lower and upper case letter`;
    }
    if (control.hasError('matchPassword')) {
      return `${fieldName} do not match with password`
    }
  }
}
