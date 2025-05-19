import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
 constructor() {
    console.log('Navigated to Product Details');
  }
}
