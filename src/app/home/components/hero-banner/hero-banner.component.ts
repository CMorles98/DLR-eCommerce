import { AfterViewInit, Component, inject } from '@angular/core';
import { Pagination, Autoplay } from 'swiper/modules';
import 'animate.css';
import Swiper from 'swiper';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrl: './hero-banner.component.scss'
})
export class HeroBannerComponent implements AfterViewInit {
  translate: TranslateService = inject(TranslateService);

  public HomeSliderData = [
    {
      id: 1,
      title: this.translate.instant("home.hero.title"),
      subtitle: this.translate.instant("home.hero.subtitle"),
      img: "assets/img/support_assets/Banner_OfertasWEB.webp",
    },
  ];

  ngAfterViewInit() {
    new Swiper('.swiper', {
      loop: false,
      pagination: {
        el: '.tp-slider-dot',
        clickable: true,
      },
      autoplay: {
        delay: 3000,
        pauseOnMouseEnter: true,
        disableOnInteraction: true
      },
      modules: [Pagination, Autoplay],
    });
  }
}
