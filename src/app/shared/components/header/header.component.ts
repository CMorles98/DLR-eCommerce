import { Component, HostListener, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() showSecondNavbar = false
  public searchText: string = '';
  public productType: string = '';
  
  
  private router: Router = inject(Router)
  public cartService: CartService = inject(CartService)
  public utilsService: UtilsService = inject(UtilsService)


  constructor() { }

  changeHandler(selectedOption: { value: string; text: string }) {
    this.productType = selectedOption.value;
  }

  headerSticky: boolean = false;

  @HostListener('window:scroll', ['$event']) onscroll() {
    if (window.scrollY > 80) {
      this.headerSticky = true;
    } else {
      this.headerSticky = false;
    }
  }

  handleSearchSubmit() {
    const queryParams: { [key: string]: string | null } = {};
    if (!this.searchText && !this.productType) {
      return
    }
    else {
      if (this.searchText) {
        queryParams['searchText'] = this.searchText;
      }
      if (this.productType) {
        queryParams['productType'] = this.productType;
      }
      this.router.navigate(['/pages/search'], { queryParams });
    }
  }
}
