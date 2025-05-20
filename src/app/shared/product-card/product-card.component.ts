import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../models/product.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit{
  ngOnInit(): void {
  console.log('🟡 Received product in ProductCardComponent:', this.product);
  }
  @Input() product!: IProduct;
  @Output() addToCartClicked = new EventEmitter<IProduct>();

  addToCart(product: IProduct) {
    this.addToCartClicked.emit(product);
  }
}
