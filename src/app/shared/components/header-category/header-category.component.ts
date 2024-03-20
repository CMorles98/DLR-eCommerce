import { Router  } from '@angular/router';
import { Component } from '@angular/core';
import { ICategory } from '../../interfaces/category.interface';

@Component({
  selector: 'app-header-category',
  templateUrl: './header-category.component.html',
  styleUrls: ['./header-category.component.scss']
})
export class HeaderCategoryComponent {

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


 ];

 public isActive:boolean = false;

 constructor(private router: Router) {}

public handleActive(): void {
  this.isActive = !this.isActive;
}

  public handleParentCategory(value: string): void {
    const newCategory = value.toLowerCase().replace("&", "").split(" ").join("-");
    this.router.navigate(['/'], { queryParams: { category: newCategory } });
    this.handleActive()
  }

  public handleSubCategory(value: string): void {
    const newCategory = value.toLowerCase().replace("&", "").split(" ").join("-");
    this.router.navigate(['/'], { queryParams: { subcategory: newCategory } });
    this.handleActive()
  }
}
