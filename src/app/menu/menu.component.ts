import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { IDishes, dishes } from '../Dish';
import { formatPrice } from '../formatPrice';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  //making my imported dishes and formatPrice function accessible in HTML
  dishes: Array<IDishes> = dishes;
  formatPrice = formatPrice;
  constructor(private cartService: CartService) {
    cartService = this.cartService
  }

  addToCart(dish: IDishes) {
    this.cartService.addToCart(dish);
  }
}
