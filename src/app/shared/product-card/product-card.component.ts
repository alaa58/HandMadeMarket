import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: IProduct;
  @Output() addToCartClicked = new EventEmitter<IProduct>();

  addToCart(product: IProduct) {
    this.addToCartClicked.emit(product);
  }
}
