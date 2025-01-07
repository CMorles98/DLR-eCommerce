import { Component, inject, OnInit } from '@angular/core';
import { IProduct } from '../../../shared/interfaces/product.interface';
import { UtilsService } from '../../../shared/services/utils.service';
import { ProductService } from '../../../shared/services/product.service';
import { ProductParameters } from '../../../shared/interfaces/product-parameters.interface';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrl: './featured-products.component.scss'
})
export class FeaturedProductsComponent implements OnInit {
  
  public utilsService: UtilsService = inject(UtilsService)
  public productService: ProductService = inject(ProductService)
  
  products: IProduct[] = []

  ngOnInit(): void {
    const params: ProductParameters = { featured: true }
    this.productService.getProducts(params)
    .subscribe({
      next: (products) => {
        this.products = products
      },
    });
  }


}
