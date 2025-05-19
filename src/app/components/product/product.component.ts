
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [CommonModule,RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  products:any[]=[];
  pageNumber:number=1;
  pageSize:number=4;
  constructor(private productService:ProductService){
  }

ngOnInit(): void {
  if(this.pageNumber<1)
    this.pageNumber=1
 this.productService.getAllProducts(this.pageNumber,this.pageSize).subscribe(data => {
  this.products = data;
});
}
goToNextPage() {
  this.pageNumber++;
  this.loadProducts();
}

goToPreviousPage() {
  if (this.pageNumber > 1) {
    this.pageNumber--;
    this.loadProducts();
  }
}

loadProducts() {
  this.productService.getAllProducts(this.pageNumber, this.pageSize)
    .subscribe(data => {
      this.products = data;
    });
}
}
