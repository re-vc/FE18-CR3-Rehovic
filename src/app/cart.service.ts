import { Injectable } from '@angular/core';
import { IDishes } from './Dish';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Array<IDishes> = [];

  constructor() { }

  addToCart(dishObj: IDishes) {
    this.cart.push(dishObj);
  }
  clearMyCart() {
    this.cart = [];
  }
  getMyCart() {
    return this.cart;
  }
}
