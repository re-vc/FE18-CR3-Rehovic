import { Component } from '@angular/core';
import { dishes, IDishes } from '../dishes';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  //making my imported dishes accessible in HTML
  dishes: Array<IDishes> = dishes;
  
  formatPrice(price: number): string {
    return price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });
  }
}
