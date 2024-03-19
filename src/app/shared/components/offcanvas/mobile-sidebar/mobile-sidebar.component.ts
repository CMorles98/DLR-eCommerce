import { Component, Input } from "@angular/core";
import { IMobileType } from "../../../interfaces/menu.interface";
import { UtilsService } from "../../../services/utils.service";
import category_data from "../../../data/category-data";


@Component({
  selector: 'app-mobile-sidebar',
  templateUrl: './mobile-sidebar.component.html',
  styleUrls: ['./mobile-sidebar.component.scss']
})
export class MobileSidebarComponent {

  @Input () product_type!:string;

  public mobile_menu: IMobileType[] = [];
  public isCategoryActive:boolean = false;
  public openCategory:string = '';
  public isActiveMenu:string = '';
  public isToggleActive:string = '';

  filterCategories () {
    return category_data.filter(
      (c) => c.productType.toLowerCase() === this.product_type.toLowerCase()
    );
  }

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
