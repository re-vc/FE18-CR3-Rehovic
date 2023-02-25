import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { IDishes } from '../Dish';
import { OnInit } from '@angular/core';
import { formatPrice } from '../formatPrice';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: Array<IDishes> = [];
  formatPrice = formatPrice;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.getMyCart();
  }

  summary(): number {
    let sum: number = 0;
    for (const val of this.cart) {
      sum += val.price;
    }
    return sum;
  }
  service(): number {
    let sum: number = this.summary() * 0.1;
    return sum;
  }
  discount(val: number): number {
    if (val > 40) {
      return val * 0.15;
    }
    return 0;
  }
  total(): number {
    let sum: number = this.summary() + this.service();
    sum -= this.discount(sum);
    return sum;
  }
  clear(): void {
    this.cartService.clearMyCart();
    this.cart = [];
  }
  // only saying successfull and clearing, not actually using the data to do something.
  order(): void {
    alert('Order Successfull');
    this.clear();
  }
}
