import { Component } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { ICategory } from '../../../interfaces/category.interface';
import { ProductService } from '../../../services/product.service';
import { categoryData } from '../../../data/category-data';
import { IProduct } from '../../../interfaces/product.interface';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.scss'],
})
export class CategoryFilterComponent {
  public categoryData: ICategory[] = categoryData;
  public products: IProduct[] = [];
  activeQuery: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private viewScroller: ViewportScroller,
    public productService: ProductService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams) => {
      this.activeQuery = queryParams['category'];
    });

    this.productService.products.subscribe(products => {
      this.products = products
      console.log(this.products)
    })
  }

  handleCategoryRoute(value: string): void {
    const newCategory = value.toLowerCase().replace('&', '').split(' ').join('-');

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
      e.category.name.toLowerCase() === category.toLowerCase() || 
      this.translate.instant(`category.${category.toLowerCase()}`) === e.category.name.toLowerCase()
    ).length || '0'
  }
}
