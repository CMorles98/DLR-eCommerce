import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { ICategory } from '../../../interfaces/category.interface';
import { ProductService } from '../../../services/product.service';
import { IProduct } from '../../../interfaces/product.interface';
import { Subscription } from 'rxjs';
import { CategoryService } from '../../../services/category.service';
import { ProductParameters } from '../../../interfaces/product-parameters.interface';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.scss'],
})
export class CategoryFilterComponent implements OnInit, OnDestroy{
  
  route: ActivatedRoute = inject(ActivatedRoute)
  router: Router = inject(Router)
  viewScroller: ViewportScroller = inject(ViewportScroller)
  productService: ProductService = inject(ProductService)
  categoryService: CategoryService = inject(CategoryService)
  translate: TranslateService = inject(TranslateService)

  componentSubscription: Subscription = new Subscription()
  categoryData: ICategory[] = [];
  products: IProduct[] = [];
  activeQuery: string = '';


  ngOnDestroy(): void {
    if (this.componentSubscription) {
      this.componentSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {

    this.route.queryParams.subscribe((queryParams) => {
      this.activeQuery = queryParams['category'];
    });

    const parameters : ProductParameters = {}

    this.componentSubscription.add(
      this.productService.getProducts(parameters).subscribe(products => {
        this.products = products
      })
    )    

    this.categoryService.get()
    .subscribe(categories => {
      console.log(categories)
      this.categoryData = categories
    })
  }

  handleCategoryRoute(value: string): void {
    const newCategory = value.toLowerCase().replace('&', '').split(' ').join('-')

    // Define the query parameters as an object
    const queryParams: Params = {
      category: newCategory,
    };

    this.router
      .navigate([], {
        relativeTo: this.route,
        queryParams, // Pass the queryParams object here
        queryParamsHandling: 'merge',
        skipLocationChange: false,
      })
      .finally(() => {
        this.viewScroller.setOffset([120, 120]);
        this.viewScroller.scrollToAnchor('products'); // Anchore Link
      });
  }

  getProductByCategory(category: string) {
    return this.products.filter(e => 
      e.category.some(cat => cat.name.toLowerCase() === category.toLowerCase())
    ).length || '0'
  }
}
