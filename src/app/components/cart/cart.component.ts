// import { CartService } from './../../core/services/cart.service';
// import { Component, OnInit, inject } from '@angular/core';
// import { ICart } from '../../core/interfaces/icart';
// import { CommonModule } from '@angular/common';

// @Component({  
//   selector: 'app-cart',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './cart.component.html',
//   styleUrl: './cart.component.css'
// })
// export class CartComponent implements OnInit {

//   private readonly _CartService = inject(CartService);
  
//   CartDetails: ICart[] = [];
//   totalPrice: number = 0;

//   ngOnInit(): void {
//     this._CartService.getCart().subscribe({
//       next: (res) => {
//         console.log(res);
//         this.CartDetails = res;
//       },
//       error: (err) => {
//         console.log(err);
//       }
//     });

//     this._CartService.cartTotalPrice$.subscribe(price => {
//       this.totalPrice = price;
//     });

//     this._CartService.loadCartCount();
//   }

//   removeItem(cartItemId: number) {
//   this._CartService.deleteCartItem(cartItemId).subscribe({
//     next: () => {
//       this.CartDetails = this.CartDetails.filter(item => item.id !== cartItemId);
//     },
//     error: (err) => console.error(err)
//   });
// }

// }

import { CartService } from './../../core/services/cart.service';
import { Component, OnInit, inject } from '@angular/core';
import { ICart } from '../../core/interfaces/icart';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({  
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  private readonly _CartService = inject(CartService);
  
   cartItems$!: Observable<ICart[]>;
  totalPrice: number = 0;

  ngOnInit(): void {
    this.cartItems$ = this._CartService.cartItems$;

    this._CartService.cartTotalPrice$.subscribe(price => {
      this.totalPrice = price;
    });

    this._CartService.getCart().subscribe();
  }

  removeItem(cartItemId: number) {
    this._CartService.deleteCartItem(cartItemId).subscribe();
  }
}
