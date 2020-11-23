import { AbstractControl, ValidatorFn } from '@angular/forms';

export function validateValue(checkControlValue: (value: string) => boolean): ValidatorFn | null {
  return (control: AbstractControl) => {
    return !control.value || !checkControlValue(control.value) ? { 'invalidValue': true } : null;
  };
}
