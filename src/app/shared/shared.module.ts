import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CartSidebarComponent } from './components/offcanvas/cart-sidebar/cart-sidebar.component';
import { FooterOneComponent } from './footer/footer-one/footer-one.component';
import { HeaderCategoryComponent } from './components/header-category/header-category.component';
import { HeaderComponent } from './components/header/header.component';
import { MobileSidebarComponent } from './components/offcanvas/mobile-sidebar/mobile-sidebar.component';
import { ProductDetailsThumbComponent } from './components/product-details-com/product-details-thumb/product-details-thumb.component';
import { ProductDetailsWrapperComponent } from './components/product-details-com/product-details-wrapper/product-details-wrapper.component';
import { ProductItemOneComponent } from './components/product-item-one/product-item-one.component';
import { ProductModalComponent } from './components/modals/product-modal/product-modal.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { TopMenuSecondaryComponent } from './components/top-menu-secondary/top-menu-secondary.component';
import { VideoPopapComponent } from './components/modals/video-popap/video-popap.component';

@NgModule({
  declarations: [
    HeaderComponent,
    TopMenuComponent,
    TopMenuSecondaryComponent,
    HeaderCategoryComponent,
    CartSidebarComponent,
    MobileSidebarComponent,
    ProductItemOneComponent,
    ProductModalComponent,
    VideoPopapComponent,
    ProductDetailsThumbComponent,
    ProductDetailsWrapperComponent,
    FooterOneComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    ProductItemOneComponent,
    ProductModalComponent,
    VideoPopapComponent,
    FooterOneComponent
  ]
})
export class SharedModule { }