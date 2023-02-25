import { Component } from '@angular/core';
import { dishes, IDishes } from '../Dish';
import { ActivatedRoute, Params } from '@angular/router';
import { formatPrice } from '../formatPrice';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {  
  dish: IDishes = {} as IDishes;
  formatPrice = formatPrice;

  id: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit():void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.dish = dishes[this.id];
    });
  }
}
