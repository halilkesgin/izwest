import { AbstractControl, ValidationErrors } from "@angular/forms";

export class MailValidators {
    static isValidExtension(control: AbstractControl): ValidationErrors| null{
       const v =  control.value as string;

       if(v.endsWith('@gmail.com') || v.endsWith('@outlook.com') || v.endsWith('@hotmail.com')) {
           return null;
       } else {
           return {
                wrongExtension: true
           }
       }
    }
}