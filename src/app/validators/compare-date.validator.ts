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
        
        if (control.value && dateCompareControl.value) {
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
}

// custom validator to check that two fields match
export function CompareTwoDate(controlName: string, compareControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const dateCompareControl = formGroup.controls[compareControlName];
        const lastChange = localStorage.getItem('lastChange');

        if (control.errors && !control.errors.compareDate) {
            // return if another validator has already found an error on the matchingControl
            localStorage.removeItem('lastChange');
            return;
        }

        if (dateCompareControl.errors && !dateCompareControl.errors.compareDate) {
            // return if another validator has already found an error on the matchingControl
            localStorage.removeItem('lastChange');
            return;
        }        
        
        if (control.value && dateCompareControl.value) {
            // set error on matchingControl if validation fails
            const fromDate = new Date(control.value);
            const toDate = new Date(dateCompareControl.value);
            if (fromDate.getTime() >= toDate.getTime()) {
                if (lastChange === '1') { 
                    control.setErrors({ compareDate: true });
                    dateCompareControl.setErrors(null); 
                }
                if (lastChange === '2') {
                    dateCompareControl.setErrors({ compareDate: true });                                
                    control.setErrors(null);
                }
            } else {
                control.setErrors(null);
                dateCompareControl.setErrors(null);
            }
        } else {
            if (!(control.value)) {
                dateCompareControl.setErrors(null);
            }
            if (!(dateCompareControl.value)) {
                control.setErrors(null);
            }
        }
        localStorage.removeItem('lastChange');
    }
}