import { Component,Input } from '@angular/core';
import { IProduct, IProductCart } from '../../interfaces/product.interface';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent {
  @Input () product! : IProduct;

  constructor(
    public cartService: CartService
  ) {}
  // add to cart
  addToCart(product: IProduct) {
    this.cartService.addCartProduct(product);
  }

  // Function to check if an item is in the cart
  isItemInCart(item: IProduct): boolean {
    return this.cartService.getCartProducts().some((prd: IProduct) => prd.id === item.id);
  }

  getCategoryNames(){

  }
}
