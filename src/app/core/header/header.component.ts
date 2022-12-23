import { Component } from '@angular/core';
import { CartTooltipService } from '@shared/components/cart-tooltip/cart-tooltip.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private cartTooltipService: CartTooltipService) {}

  openTooltip() {
    this.cartTooltipService.open();
  }

  closeTooltip() {
    this.cartTooltipService.close();
  }
}
