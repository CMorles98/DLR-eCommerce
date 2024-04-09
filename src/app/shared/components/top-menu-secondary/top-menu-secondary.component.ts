import { Component, inject } from '@angular/core';
import { IMenuItem } from '../../interfaces/menu.interface';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-top-menu-secondary',
  templateUrl: './top-menu-secondary.component.html',
  styleUrl: './top-menu-secondary.component.scss'
})
export class TopMenuSecondaryComponent {

  translate = inject(TranslateService)

  public menu_data: IMenuItem[] = [

    {
      id:1,
      link:'/',
      title: this.translate.instant('menu.MobileDevices'),
    },
    {
      id:2,
      link:'/',
      title: this.translate.instant('menu.Audio'),
    },
    {
      id:3,
      link:'/',
      title: this.translate.instant('menu.Laptops'),
    },
    {
      id:4,
      link:'/',
      title: this.translate.instant('menu.Gaming'),
    },
    {
      id:5,
      link:'/',
      title: this.translate.instant('menu.Connectivity'),
    },


  ]
}
