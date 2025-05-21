import { Component } from '@angular/core';

import { GetsellersService } from '../../core/services/getsellers.service';
import { IProduct, ISeller } from '../../core/interfaces/iseller';
import { CommonModule } from '@angular/common';
import { jwtDecode } from 'jwt-decode';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-sellerdashboard',
  imports: [CommonModule,RouterLink],
  templateUrl: './sellerdashboard.component.html',
  styleUrl: './sellerdashboard.component.css'
})
export class SellerdashboardComponent {
  productsList: IProduct[] = [];

  constructor(private sellerService: GetsellersService,) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken: any = jwtDecode(token);
      const sellerId = decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];

      if (sellerId) {
        this.sellerService.getSellerWithItsProducts(sellerId).subscribe({
          next: (res) => {
            this.productsList = res.products;
            console.log("Seller with products:", res);
          },
          error: (error) => {
            console.log("Error fetching seller:", error);
          }
        });
      } else {
        console.error("Seller ID not found in token");
      }
    }
  }
  deleteProduct(id:any){
    
  }
}



