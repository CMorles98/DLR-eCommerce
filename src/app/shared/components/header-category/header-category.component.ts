import { Router  } from '@angular/router';
import { Component } from '@angular/core';
import { ICategory } from '../../interfaces/category.interface';
import { categoryData } from '../../data/category-data';

@Component({
  selector: 'app-header-category',
  templateUrl: './header-category.component.html',
  styleUrls: ['./header-category.component.scss']
})
export class HeaderCategoryComponent {

 public categoryItems: ICategory[] = categoryData;

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
