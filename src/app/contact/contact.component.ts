import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MailValidators } from './mail.validation';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit{

  contactForm = new FormGroup({
    name : new FormControl('',[
      Validators.required, 
      Validators.minLength(3),
      Validators.maxLength(20)
    ]),
    surname : new FormControl('',[
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(20)
    ]),
    phone : new FormControl('',[
      Validators.required,
      Validators.minLength(15)
    ]),
    email : new FormControl('',[
      Validators.required,
      MailValidators.isValidExtension
    ]),
    message : new FormControl('',[
      Validators.required
    ])
  });

  get name() {
    return this.contactForm.get('name');
  }

  get surname() {
    return this.contactForm.get('surname');
  }

  get phone() {
    return this.contactForm.get('phone');
  }

  get email(){
    return this.contactForm.get('email');
  }

  get message(){
    return this.contactForm.get('message');
  }
  
  ngOnInit():void {}
 
  onSubmit(){
    console.log(this.contactForm.value);
  }
 
  updateForm(){
    this.contactForm.patchValue({
      name: 'mehmet',
      surname: 'aslan'
    })
  }
}
