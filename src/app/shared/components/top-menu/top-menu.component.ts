import { Component, inject } from '@angular/core';
import { IMenuItem } from '../../interfaces/menu.interface';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.scss'
})
export class TopMenuComponent {

  translate = inject(TranslateService)

  public menu_data: IMenuItem[] = [
    {
      id: 1,
      link: '#',
      title: 'menu.SpecialOfferts',
      icon: true
    },
    {
      id: 2,
      link: '#',
      title: 'menu.AboutDLR'
    },
    {
      id: 3,
      link: '#',
      title: 'menu.FAQ'
    },
    {
      id: 4,
      link: '#',
      title: 'menu.Contact'
    },
  ]
}
