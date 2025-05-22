import { CartService } from './../../core/services/cart.service';
import { Component, OnInit, inject } from '@angular/core';
import { ICart } from '../../core/interfaces/icart';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

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
  quantity: number = 1;

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
// incrementProduct(item: ICart): void {
//   if (item.quantity < item.stock) {
//     this._CartService.updateProductQuantity(item.id, item.quantity + 1).subscribe(() => {
//       this._CartService.getCart().subscribe();
//     })
//   }
// }

// decrementProduct(item: ICart): void {
//   if (item.quantity > 1) {
//     this._CartService.updateProductQuantity(item.id, item.quantity - 1).subscribe(() => {
//       this._CartService.getCart().subscribe();
//     });
//   }
//     else {
//     Swal.fire({
//   icon: 'warning',
//   title: 'Cannot Increase Quantity',
//   text: `Only ${item.stock} item(s) available in stock.`,
//   confirmButtonText: 'OK'
// });

  
//   }
// }
incrementProduct(item: ICart): void {
  if (item.quantity < item.stock) {
    this._CartService.updateProductQuantity(item.id, item.quantity + 1).subscribe(() => {
      this._CartService.getCart().subscribe(() => {
        Swal.fire({
          icon: 'success',
          title: 'Quantity Updated',
          text: 'The quantity has been increased successfully.',
          timer: 1500,
          showConfirmButton: false
        });
      });
    });
  } else {
    Swal.fire({
      icon: 'warning',
      title: 'Cannot Increase Quantity',
      text: `Only ${item.stock} item(s) available in stock.`,
      confirmButtonText: 'OK'
    });
  }
}

decrementProduct(item: ICart): void {
  if (item.quantity > 1) {
    this._CartService.updateProductQuantity(item.id, item.quantity - 1).subscribe(() => {
      this._CartService.getCart().subscribe(() => {
        Swal.fire({
          icon: 'info',
          title: 'Quantity Updated',
          text: 'The quantity has been decreased successfully.',
          timer: 1500,
          showConfirmButton: false
        });
      });
    });
  } else {
    Swal.fire({
      icon: 'warning',
      title: 'Cannot Decrease Quantity',
      text: 'Quantity cannot be less than 1.',
      confirmButtonText: 'OK'
    });
  }
}



}
