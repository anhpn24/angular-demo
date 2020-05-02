import { FormGroup } from '@angular/forms';

// custom validator to check that two fields match
export function CompareDate(controlName: string, compareControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const dateCompareControl = formGroup.controls[compareControlName];

        if (dateCompareControl.errors && !dateCompareControl.errors.compareDate) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        const fromDate = new Date(control.value);
        const toDate = new Date(dateCompareControl.value);
        if (fromDate.getTime() >= toDate.getTime()) {
            dateCompareControl.setErrors({ compareDate: true });
        } else {
            dateCompareControl.setErrors(null);
        }
    }
}