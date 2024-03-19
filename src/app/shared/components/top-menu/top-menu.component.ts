import { Component } from '@angular/core';
import { IMenuItem } from '../../interfaces/menu.interface';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.scss'
})
export class TopMenuComponent {

  public menu_data: IMenuItem[] = [
    {
      id: 1,
      link: '#',
      title: 'Ofertas Especiales',
      icon: true
    },
    {
      id: 2,
      link: '#',
      title: 'Sobre DLR'
    },
    {
      id: 3,
      link: '#',
      title: 'FAQ'
    },
    {
      id: 4,
      link: '#',
      title: 'Contacto'
    },
  ]
}
