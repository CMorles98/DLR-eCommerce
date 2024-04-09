import { Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

@Component({
  selector: 'app-ideal-product',
  templateUrl: './ideal-product.component.html',
  styleUrl: './ideal-product.component.scss'
})
export class IdealProductComponent {

  translate: TranslateService = inject(TranslateService);

  public data = [
    {
      id: 1,
      link: '#',
      img: '/assets/img/Icons_SVG/Smartphone_Icon.svg',
      title: this.translate.instant('idealProduct.smartPhones'),
      subTitle: '+200 ' + `${this.translate.instant('idealProduct.devices')}`,
    },
    {
      id: 2,
      link: '#',
      img: '/assets/img/Icons_SVG/Smartwatche_Icon.svg',
      title: this.translate.instant('idealProduct.smartWatches'),
      subTitle: '+200 ' + `${this.translate.instant('idealProduct.devices')}`
    },
    {
      id: 3,
      link: '#',
      img: '/assets/img/Icons_SVG/Audífonos_Icon.svg',
      title: this.translate.instant('idealProduct.headphones'),
      subTitle: '+200 ' + `${this.translate.instant('idealProduct.devices')}`
    },
    {
      id: 4,
      link: '#',
      img: '/assets/img/Icons_SVG/Laptop_Icon.svg',
      title: this.translate.instant('idealProduct.laptops'),
      subTitle: '+200 ' + `${this.translate.instant('idealProduct.devices')}`
    },
    {
      id: 5,
      link: '#',
      img: '/assets/img/Icons_SVG/Cornetas_Icon.svg',
      title: this.translate.instant('idealProduct.wallets'),
      subTitle: '+200 ' + `${this.translate.instant('idealProduct.devices')}`
    },
    {
      id: 6,
      link: '#',
      img: '/assets/img/Icons_SVG/Gaming_Icon.svg',
      title: this.translate.instant('idealProduct.gaming'),
      subTitle: '+200 ' + `${this.translate.instant('idealProduct.devices')}`
    },
    {
      id: 7,
      link: '#',
      img: '/assets/img/Icons_SVG/Tablet_Icon.svg',
      title: this.translate.instant('idealProduct.tablets'),
      subTitle: '+200 ' + `${this.translate.instant('idealProduct.devices')}`
    },
    {
      id: 8,
      link: '#',
      img: '/assets/img/Icons_SVG/Conectividad_Icon.svg',
      title: this.translate.instant('idealProduct.connectivity'),
      subTitle: '+200 ' + `${this.translate.instant('idealProduct.devices')}`
    },
  ];
  
  ngAfterViewInit() {
    
    new Swiper('.tp-brand-slider-active', {
      modules: [Pagination, Navigation, Autoplay],
      loop: true,
      autoplay: {
        delay: 1500,
        disableOnInteraction: true
      },
      spaceBetween: 0,
      pagination: {
        el: '.tp-brand-slider-dot',
        clickable: true,
      },
      navigation: {
        nextEl: '.tp-brand-slider-button-next',
        prevEl: '.tp-brand-slider-button-prev',
      },
      breakpoints: {
        '1200': {
          slidesPerView: 5,
        },
        '992': {
          slidesPerView: 4,
        },
        '768': {
          slidesPerView: 3,
        },
        '576': {
          slidesPerView: 2,
        },
        '0': {
          slidesPerView: 1,
        },
      },
    });


  }
}
