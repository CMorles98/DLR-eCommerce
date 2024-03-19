import { Component } from '@angular/core';
import { IMenuItem } from '../../interfaces/menu.interface';

@Component({
  selector: 'app-top-menu-secondary',
  templateUrl: './top-menu-secondary.component.html',
  styleUrl: './top-menu-secondary.component.scss'
})
export class TopMenuSecondaryComponent {

  public menu_data: IMenuItem[] = [

    {
      id:1,
      link:'/',
      title:'Dispositivos Móviles',
    },
    {
      id:2,
      link:'/',
      title:'Audio',
    },
    {
      id:3,
      link:'/',
      title:'Laptops',
    },
    {
      id:4,
      link:'/',
      title:'Gaming',
    },
    {
      id:5,
      link:'/',
      title:'Conectividad',
    },


  ]
}
