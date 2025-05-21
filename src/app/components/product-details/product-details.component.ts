import { Data } from './../../../../node_modules/memfs/lib/fsa/types.d';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../Services/product.service';
import { IProduct } from '../../models/product.model';
import { CartService } from '../../core/services/cart.service';

import { ReviewsComponent } from '../reviews/reviews.component';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule,ReviewsComponent],
  standalone: true,
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements  OnInit{

  private readonly  _ActivatedRoute = inject(ActivatedRoute)
  private readonly  _ProductService= inject(ProductService)
  private readonly _CartService=inject(CartService)
  productId!: number;

  detailsProductObj:IProduct ={} as IProduct;
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(p)=>{
        console.log(p);
        let product_id= p.get('id');
        this.productId=Number(product_id)
        this._ProductService.getProductById(Number(product_id)).subscribe({
          next:(res)=>{
            console.log(res);
            this.detailsProductObj= res;
          },
          error:(err)=>{
            console.log(err);
          }
        })
      }
    })
  }

AddToCart(quentity:number){
  this._CartService.addProductToCart(this.productId,quentity).subscribe({
      next:(res)=>{
        console.log(res)
      },
      error:(err)=>{
        console.log(err)
      }
    })
}
}
