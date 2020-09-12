import { AbstractControl, ValidatorFn } from "@angular/forms";

export function forbiddenNameValidtor(control: AbstractControl) : {[key: string]: any } | null{
 const forbidden = /admin/.test(control.value);
 return forbidden ? { 'forbiddenName' : { value: control.value }} : null;
} 

export function NotAllowedName(NameNotAllowd: RegExp) : ValidatorFn {
    return (control: AbstractControl) : {[key: string]: any } | null => {
        const forbidden = NameNotAllowd.test(control.value);
        return forbidden ? { 'NameNotAllowd' : { value: control.value }} : null;
       } ;
}


