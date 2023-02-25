import { Component } from '@angular/core';
import { dishes, IDishes } from '../Dish';
import { ActivatedRoute, Params } from '@angular/router';
import { formatPrice } from '../formatPrice';
import { OnInit } from '@angular/core';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  dish: IDishes = {} as IDishes;
  formatPrice = formatPrice;

  id: number = 0;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.dish = dishes[this.id];
    });
  }

  addToCart(dish: IDishes) {
    this.cartService.addToCart(dish);
  }
}
