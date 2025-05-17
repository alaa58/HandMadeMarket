
// register.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { registerService } from '../../core/services/register.service';
import { IRegister } from '../../core/interfaces/iregister';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  registrationSuccess = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private registerService: registerService
  ) {
    this.registerForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['user', Validators.required]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const formData: IRegister = this.registerForm.value;

      this.registerService.register(formData).subscribe({
        next: () => {
          this.registrationSuccess = true;
          this.errorMessage = '';
          this.registerForm.reset();
        },
        error: (error) => {
          console.error('Registration error:', error); 
          this.errorMessage = error.error?.message || JSON.stringify(error.error) || 'Registration failed. Please try again.';
          this.registrationSuccess = false;
        }

      });
    }
  }
}