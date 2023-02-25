import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { IDishes } from '../Dish';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private cartService: CartService) { }

  currentItems(): number {    
    return this.cartService.cart.length;
  }
}
