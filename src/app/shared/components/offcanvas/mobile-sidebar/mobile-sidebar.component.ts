import { Component, Input, inject } from "@angular/core";
import { IMobileType } from "../../../interfaces/menu.interface";
import { UtilsService } from "../../../services/utils.service";
import { ICategory } from "../../../interfaces/category.interface";
import { AuthService } from "../../../../auth/services/auth.service";
import { TranslateService } from "@ngx-translate/core";


@Component({
  selector: 'app-mobile-sidebar',
  templateUrl: './mobile-sidebar.component.html',
  styleUrls: ['./mobile-sidebar.component.scss']
})
export class MobileSidebarComponent {
  @Input () product_type!:string;

  translate: TranslateService = inject(TranslateService)
  authService: AuthService = inject(AuthService)

  public mobile_menu: IMobileType[] = [
    
    {
      id:1,
      link:'/',
      title: this.translate.instant('SpecialOfferts'),
    },
    {
      id:2,
      link:'/',
      title: this.translate.instant('AboutDLR'),
    },
    {
      id:3,
      link:'/',
      title: this.translate.instant('FAQ'),
    },
    {
      id:4,
      link:'/',
      title: this.translate.instant('Contact'),
    },
  ];
  
 public categoryItems: ICategory[] = [

  {
    id: "641d424bdbfab7b02ab28b15",
    parent: "Smartphones",
    products: [
      "641e887d05f9ee1717e1348a",
      "641e887d05f9ee1717e1348f",
      "641e887d05f9ee1717e13496"
    ],
  },
  {
    id: "6419723bd7dc5155c04330d4",
    parent: "SmartWatches",
    products: [
      "641e887d05f9ee1717e1349a",
      "641e887d05f9ee1717e1349f",
      "641d4106dbfab7b02ab28b22"
    ],
  },
  {
    id: "6419723bd7dc5155c44350d5",
    parent: "Audífonos",
    products: [
      "641e887d05f9ee1717e134ad",
      "641e887d05f9ee1717e134b2"
    ],
  },
  {
    id: "641d424bdbfab7502ab28b95",
    parent: "Laptops",
    products: [
      "641e887d05f9ee1717e1348a",
      "641e887d05f9ee1717e1348f",
      "641e887d05f9ee1717e13496"
    ],
  },
  {
    id: "6419723bd7dc6155c04350d4",
    parent: "Cornetas",
    products: [
      "641e887d05f9ee1717e1349a",
      "641e887d05f9ee1717e1349f",
      "641d4106dbfab7b02ab28b22"
    ],
  },
  {
    id: "6419723bd7dc6155c14350d4",
    parent: "Gaming",
    products: [
      "641e887d05f9ee1717e1349a",
      "641e887d05f9ee1717e1349f",
      "641d4106dbfab7b02ab28b22"
    ],
  },
  {
    id: "2419723bd7dc6155c14350d4",
    parent: "Tablets",
    products: [
      "641e887d05f9ee1717e1349a",
      "641e887d05f9ee1717e1349f",
      "641d4106dbfab7b02ab28b22"
    ],
  },
  {
    id: "2419723bd7dc6155c14330d4",
    parent: "Conectividad",
    products: [
      "641e887d05f9ee1717e1349a",
      "641e887d05f9ee1717e1349f",
      "641d4106dbfab7b02ab28b22"
    ],
  },
 ]

  public isCategoryActive:boolean = false;
  public openCategory:string = '';
  public isActiveMenu:string = '';
  public isToggleActive:string = '';

  constructor(public utilsService:UtilsService) {}

  toggleCategoryActive() {
    this.isCategoryActive = !this.isCategoryActive;
  }


  handleOpenSubMenu(title: string) {
    this.isActiveMenu = (this.isActiveMenu === title) ? '' : title;
  }

  handleOpenSubCategory (title: string)  {
    if (title === this.openCategory) {
      this.openCategory = "";
    } else {
      this.openCategory = title;
    }
  };

  handleToggleActive = (type: string) => {
    if (type === this.isToggleActive) {
      this.isToggleActive = "";
    } else {
      this.isToggleActive = type;
    }
  };
}
