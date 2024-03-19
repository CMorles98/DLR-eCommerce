import { Router  } from '@angular/router';
import { Component  } from '@angular/core';
import { IMenuItem } from '../../interfaces/menu.interface';

@Component({
  selector: 'app-header-category',
  templateUrl: './header-category.component.html',
  styleUrls: ['./header-category.component.scss']
})
export class HeaderCategoryComponent {

 public categoryItems: IMenuItem[] = [
   {
     id: 1,
     link: '/pages/blog',
     title: 'Blog',
     drop_down: true,
     dropdown_menus: [
       { title: 'Blog Standard', link: '/pages/blog' },
       { title: 'Blog Grid', link: '/pages/blog-grid' },
       { title: 'Blog List', link: '/pages/blog-list' },
       { title: 'Blog Details', link: '/pages/blog-details' },
     ]
   },
 ];
 public isActive:boolean = false;
 
 constructor(private router: Router) {}
 
 public handleActive(): void {
  this.isActive = !this.isActive;
}

  public handleParentCategory(value: string): void {
    const newCategory = value.toLowerCase().replace("&", "").split(" ").join("-");
    this.router.navigate(['/shop'], { queryParams: { category: newCategory } });
  }

}
