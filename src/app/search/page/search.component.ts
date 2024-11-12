import { ViewportScroller } from '@angular/common';
import { Component, Input, OnInit, OnDestroy, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../shared/interfaces/product.interface';
import { ProductService } from '../../shared/services/product.service';
import { UtilsService } from '../../shared/services/utils.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit, OnDestroy {
  
  public productService =inject(ProductService)
  public route =inject(ActivatedRoute)
  public router =inject(Router)
  public viewScroller =inject(ViewportScroller)
  public utilsService =inject(UtilsService)
  private translate = inject(TranslateService);
  
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
  public niceSelectOptions = [
    { value: 'asc', text:  'search.sort.default' },
    { value: 'desc', text: 'search.sort.newest' },
    { value: 'low', text: 'search.sort.priceLow' },
    { value: 'high', text: 'search.sort.priceHigh' },
    { value: 'on-sale', text: 'search.sort.onSale' },
    { value: 'category', text: 'search.sort.category' },
    { value: 'new', text: 'search.sort.newArrivals' }
  ];
  public selectOptions: {value:string, text:string}[] = this.productService.filterSelect
  public brands: string[] = [];
  public tags: string[] = [];
  public category: string | null = null;
  public status: string | null = null;
  public brand: string | null = null;
  public pageNo: number = 1;
  public pageSize: number = 9;
  public paginate: any = {}; // Pagination use only
  public sortBy: string = 'asc'; // Default sorting
  public mobileSidebar: boolean = false;
  activeTab: string = this.listStyle ? 'list' : 'grid';
  public isFilterVisible: boolean = false;
  public isMobile: boolean = false;
  private resizeListener: any;

  // select option

  public filterTitles = {
    price: 'search.filters.price',
    status: 'search.filters.status',
    categories: 'search.filters.categories',
    brands: 'search.filters.brands',
    showFilters: 'search.filters.show',
    hideFilters: 'search.filters.hide'
  };

  public emptyStateText = {
    title: 'search.empty.title',
    message: 'search.empty.message',
    imageAlt: 'search.empty.imageAlt',
    continueShopping: 'search.empty.continueShopping'
  };

  public resultsText = {
    showing: 'search.results.showing'
  };

  private checkScreenSize() {
    this.isMobile = window.innerWidth < 992; // Bootstrap's lg breakpoint
    if (this.isMobile) {
      this.isFilterVisible = false;
    }
  }

  ngOnInit() {
    this.configSizeEvent();
    this.loadQueryOptions();
  }

  private loadQueryOptions() {
    this.activeTab = this.listStyle ? 'list' : 'grid';
    this.route.queryParams.subscribe((params) => {
      this.searchText = params['searchText'] || '';
      this.productType = params['productType'] || '';
      this.selectVal = params['selectVal'] || '';
      this.sortBy = params['sortBy'] || 'asc';
      this.pageNo = params['page'] ? Number(params['page']) : 1;
      this.minPrice = params['minPrice'] ? Number(params['minPrice']) : 0;
      this.maxPrice = params['maxPrice'] ? Number(params['maxPrice']) : this.productService.maxPrice;
      this.category = params['category'] || null;
      this.status = params['status'] || null;
      this.brand = params['brand'] || null;
      this.tags = params['tags'] ? params['tags'].split(',') : [];
      this.brands = params['brands'] ? params['brands'].split(',') : [];

      this.loadProducts();
    });
  }

  private configSizeEvent() {
    this.checkScreenSize();
    this.resizeListener = () => this.checkScreenSize();
    window.addEventListener('resize', this.resizeListener);
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

    // Filter by search text
    if (this.searchText) {
      filteredProducts = filteredProducts.filter((prd) =>
        prd.title.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }

    // Filter by product type
    if (this.productType) {
      filteredProducts = filteredProducts.filter(
        (prd) => prd.productType.toLowerCase() === this.productType.toLowerCase()
      );
    }

    // Filter by price range
    if (this.minPrice !== undefined && this.maxPrice !== undefined) {
      filteredProducts = filteredProducts.filter(
        (prd) => prd.price >= this.minPrice && prd.price <= this.maxPrice
      );
    }

    // Filter by status (in stock, sale, etc)
    if (this.status) {
      filteredProducts = filteredProducts.filter(
        (prd) => prd.status.toLowerCase() === this.status?.toLowerCase()
      );
    }

    // Filter by category
    if (this.category) {
      filteredProducts = filteredProducts.filter(
        (prd) => prd.category.name.toLowerCase() === this.category?.toLowerCase()
      );
    }

    // Filter by brand
    if (this.brand) {
      filteredProducts = filteredProducts.filter(
        (prd) => prd.brand.name.toLowerCase() === this.brand?.toLowerCase()
      );
    }

    return filteredProducts;
  }

  sortProducts() {
    // Find the matching option from niceSelectOptions instead of selectOptions
    const selectedOption = this.niceSelectOptions.find(option => option.value === this.sortBy);
    
    if (selectedOption) {
      this.utilsService.selectedSort.set(selectedOption.text);
      console.log(selectedOption.text)
    }

    switch (this.sortBy) {
      case 'asc':
        this.products.sort((a, b) => a.id.localeCompare(b.id));
        break;
      case 'desc':
        this.products.sort((a, b) => b.id.localeCompare(a.id));
        break;
      case 'low':
        this.products.sort((a, b) => a.price - b.price);
        break;
      case 'high':
        this.products.sort((a, b) => b.price - a.price);
        break;
      case 'on-sale':
        this.products.sort((a, b) => b.discount - a.discount);
        break;
      case 'category':
        this.products.sort((a, b) => a.category.name.localeCompare(b.category.name));
        break;
      case 'new':
        this.products.sort((a, b) => (a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1));
        break;
      default:
        this.products.sort((a, b) => a.id.localeCompare(b.id));
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
