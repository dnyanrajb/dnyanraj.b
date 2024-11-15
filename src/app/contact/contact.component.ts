import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  constructor(private fb: FormBuilder) {}
    contactForm: FormGroup = new FormGroup({});
    ngOnInit() {
      this.contactForm = this.fb.group({
        name: [''],
        subject: [''],
        phone: ['', Validators.pattern(/^\d{10}$/)],
        email: ['', Validators.email]
      })
    }

}
