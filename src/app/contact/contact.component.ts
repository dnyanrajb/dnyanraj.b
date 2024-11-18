import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBar} from '@angular/material/snack-bar';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  constructor(private fb: FormBuilder) {}
  private _snackBar = inject(MatSnackBar);
    contactForm: FormGroup = new FormGroup({});
    ngOnInit() {
      this.contactForm = this.fb.group({
        name: [''],
        subject: [''],
        phone: ['', Validators.pattern(/^\d{10}$/)],
        email: ['', Validators.email],
        message: ['']
      })
    }
    async sendEmail() {
        Object.keys(this.contactForm.controls).forEach(control => {
          this.contactForm.get(control)?.markAsTouched();
        });
        if(this.contactForm.valid) {
          // create a emailJs account and have a service then follow below steps
          emailjs.init("Your public key")
          let response = await emailjs.send("your service key","Your template key",{
            from_name: this.contactForm.value.name,
            to_name: "Dnyanraj B",
            subject: this.contactForm.value.subject,
            phone: this.contactForm.value.phone,
            message: this.contactForm.value.message,
            });
            if(response.status === 200) {
              this._snackBar.open('Message sent Sucessfully', 'OK');
            }
            else {
              this._snackBar.open('There seems to be some issue', 'OK');
            }
          this.contactForm.reset();
          Object.keys(this.contactForm.controls).forEach(control => {
            this.contactForm.get(control)?.setErrors(null);
          });
        }       
    }

}
