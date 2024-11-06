import { ViewportScroller } from '@angular/common';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../shared/interfaces/product.interface';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit, OnDestroy {
  
  @Input() listStyle: boolean = false;
  @Input() full_width: boolean = false;
  @Input() shop_1600: boolean = false;
  @Input() shop_right_side: boolean = false;
  @Input() shop_no_side: boolean = false;
  
  public products: IProduct[] = [];
  public filteredProducts: IProduct[] = [];
  public searchText: string = '';
  public productType: string = '';
  public selectVal: string = '';
  public minPrice: number = 0;
  public maxPrice: number = this.productService.maxPrice;
  public niceSelectOptions = this.productService.filterSelect;
  public brands: string[] = [];
  public tags: string[] = [];
  public category: string | null = null;
  public status: string | null = null;
  public brand: string | null = null;
  public pageNo: number = 1;
  public pageSize: number = 12;
  public paginate: any = {}; // Pagination use only
  public sortBy: string = 'asc'; // Sorting Order
  public mobileSidebar: boolean = false;
  activeTab: string = this.listStyle ? 'list' : 'grid';
  public isFilterVisible: boolean = false;
  public isMobile: boolean = false;
  private resizeListener: any;

  // select option
  public selectOptions = [
    { value: 'ascending', text: 'Default Sorting' },
    { value: 'low-to-high', text: 'Low to High' },
    { value: 'high-to-low', text: 'High to Low' },
    { value: 'new-added', text: 'New Added' },
    { value: 'on-sale', text: 'On Sale' },
  ];

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private viewScroller: ViewportScroller
  ) {
    // Check initial screen size
    this.checkScreenSize();
    
    // Add resize listener
    this.resizeListener = () => this.checkScreenSize();
    window.addEventListener('resize', this.resizeListener);
  }

  private checkScreenSize() {
    this.isMobile = window.innerWidth < 992; // Bootstrap's lg breakpoint
    if (this.isMobile) {
      this.isFilterVisible = false;
    }
  }

  ngOnInit() {
    this.activeTab = this.listStyle ? 'list' : 'grid';
    this.route.queryParams.subscribe((params) => {
      this.searchText = params['searchText'] || '';
      this.productType = params['productType'] || '';
      this.selectVal = params['selectVal'] || '';
      this.sortBy = params['sortBy'] || 'asc';
      this.pageNo = params['page'] ? Number(params['page']) : 1;

      this.loadProducts();
    });
  }

  loadProducts() {
    this.productService.products.subscribe((productData) => {
      this.products = this.filterProducts(productData);
      this.sortProducts();
      this.paginateProducts();
    });
  }

  filterProducts(productData: IProduct[]): IProduct[] {
    let filteredProducts = productData;

    if (this.searchText) {
      filteredProducts = filteredProducts.filter((prd) =>
        prd.title.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }

    if (this.productType) {
      filteredProducts = filteredProducts.filter(
        (prd) => prd.productType.toLowerCase() === this.productType.toLowerCase()
      );
    }

    return filteredProducts;
  }

  sortProducts() {
    switch (this.sortBy) {
      case 'ascending':
        this.products.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'low-to-high':
        this.products.sort((a, b) => Number(a.price) - Number(b.price));
        break;
      case 'high-to-low':
        this.products.sort((a, b) => Number(b.price) - Number(a.price));
        break;
      case 'new-added':
        this.products = this.products.slice(-this.pageSize);
        break;
      case 'on-sale':
        this.products = this.products.filter((p) => p.discount > 0);
        break;
    }
  }

  paginateProducts() {
    this.paginate = this.productService.getPager(
      this.products.length,
      this.pageNo,
      this.pageSize
    );
    this.filteredProducts = this.products.slice(
      this.paginate.startIndex,
      this.paginate.endIndex + 1
    );
  }

  changeFilterSelect(selectedOption: any) {
    this.sortByFilter(selectedOption.value);
  }

  handleActiveTab(tab: string) {
    this.activeTab = tab;
  }

  sortByFilter(value: string) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { sortBy: value, page: 1 },
      queryParamsHandling: 'merge',
    }).finally(() => {
      this.viewScroller.setOffset([120, 120]);
      this.viewScroller.scrollToAnchor('products');
    });
  }

  handleResetFilter() {
    this.minPrice = 0;
    this.maxPrice = this.productService.maxPrice;
    this.router.navigate(['search']);
  }

  updateFilter(tags: any) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { ...tags, page: 1 },
      queryParamsHandling: 'merge',
    });
  }

  setPage(page: number) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: page },
      queryParamsHandling: 'merge',
    }).finally(() => {
      this.viewScroller.setOffset([120, 120]);
      this.viewScroller.scrollToAnchor('search');
    });
  }

  toggleFilter() {
    this.isFilterVisible = !this.isFilterVisible;
  }

  ngOnDestroy() {
    // Remove the event listener when component is destroyed
    window.removeEventListener('resize', this.resizeListener);
  }
}
