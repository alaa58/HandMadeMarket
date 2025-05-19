import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-form-product',
  imports: [ReactiveFormsModule,RouterLink,CommonModule,FormsModule],
  templateUrl: './form-product.component.html',
  styleUrl: './form-product.component.css'
})
export class FormProductComponent {
selectedImageFile: File | null = null;
productDataForm!:FormGroup;
constructor(private fb:FormBuilder){}

productDataForm = this.fb.group({
  name: ['', [Validators.required, Validators.minLength(3)]],
  description: ['', Validators.required],
  price: [0, Validators.required],
  stock: [0, Validators.required],
  precentage: [0],
  hasSale: [false],
  
});

onFileSelected(event: any) {
  const file = event.target.files[0];
  if (file) {
    this.selectedImageFile = file;
  }
}

}
