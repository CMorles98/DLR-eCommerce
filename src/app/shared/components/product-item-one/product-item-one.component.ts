import { Component, Input } from '@angular/core';
import { IProduct } from '../../interfaces/product.interface';
import { CartService } from '../../services/cart.service';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-product-item-one',
  templateUrl: './product-item-one.component.html',
  styleUrl: './product-item-one.component.scss'
})
export class ProductItemOneComponent {
  @Input() product!: IProduct;
  @Input() offer_style: Boolean | undefined;

  constructor(
    public cartService: CartService,
    // public wishlistService: WishlistService,
    public utilsService: UtilsService,
  ) { }
  // add to cart
  addToCart(product: IProduct) {
    this.cartService.addCartProduct(product);
  }
  // add to cart
  // addToWishlist(product: IProduct) {
  //   this.wishlistService.add_wishlist_product(product);
  // }

  // Function to check if an item is in the cart
  isItemInCart(item: IProduct): boolean {
    return this.cartService.getCartProducts().some((prd: IProduct) => prd.id === item.id);
  }
  // isItemInWishlist(item: IProduct): boolean {
  //   return this.wishlistService.getWishlistProducts().some((prd: IProduct) => prd.id === item.id);
  // }
  
  productOutOfStock(product: IProduct): boolean {
    return product.status === 'out-of-stock' || product.quantity === 0;
  }
  productIsNew(product: IProduct): boolean {
    return true
  }



  openQuickView(product: IProduct){
    this.utilsService.handleOpenModal(product.id, product)
    this.utilsService.isProductModalOpen
  }
}

