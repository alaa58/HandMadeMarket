import { Data } from './../../../../node_modules/memfs/lib/fsa/types.d';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../Services/product.service';
import { IProduct } from '../../models/product.model';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements  OnInit{

  private readonly  _ActivatedRoute = inject(ActivatedRoute)
  private readonly  _ProductService= inject(ProductService)
  detailsProductObj:IProduct ={} as IProduct;
  //   id: 0,
  //   name: '',
  //   price: 0,
  //   stock: 0,
  //   description: '',
  //   image: '',
  //   salePercentage: 0,
  //   priceAfterSale: 0
  // };
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(p)=>{
        console.log(p);
        let product_id= p.get('id');
        this._ProductService.getById(1).subscribe({
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

 
}
