import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CartItem } from 'src/app/modals/cart-item';
import { CartService } from '../../shared/services/cart.service';
import { SharedDataService } from 'src/app/Service/shared-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {

  public cartItems: Observable<CartItem[]> = of([]);
  public shoppingCartItems: CartItem[] = [];

  constructor(
    private cartService: CartService,
    private _SharedDataService: SharedDataService,
    private router: Router
  ) { }

  ngOnInit() {
 ;
    this.cartItems = this.cartService.getItems();
    this.cartItems.subscribe(shoppingCartItems => this.shoppingCartItems = shoppingCartItems);

  }


  // Remove cart items
  public removeItem(item: CartItem) {
    this.cartService.removeFromCart(item);
  }


  // Increase Product Quantity
  public increment(product: any, quantity: number = 1) {
    this.cartService.updateCartQuantity(product, quantity);
  }

  // Decrease Product Quantity
  public decrement(product: any, quantity: number = -1) {
    this.cartService.updateCartQuantity(product, quantity);
  }
  // Get Total
  public getTotal(): Observable<number> {
    return this.cartService.getTotalAmount();
  }

  ProceedToCheckout() {

    this._SharedDataService.currentUser.subscribe(res => {
   
      if (res == null || res == undefined) {
        this.router.navigate(['/pages/my-account']);
      }
      else {
        if (res.length > 0) {
          this.router.navigate(['/pages/checkout']);
        }
        else {
          this.router.navigate(['/pages/my-account']);
        }
      }
    });
  }

}
