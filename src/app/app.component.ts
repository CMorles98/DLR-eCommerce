import { Component, OnInit, inject } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'DLR-eCommerce';

  private router: Router = inject(Router)
  private spinner: NgxSpinnerService = inject(NgxSpinnerService)

  ngOnInit(): void {
    this.router.events.subscribe((event: any) => {
      this.navigationInterceptor(event);
    });
  }

  navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this.spinner.show(); // Show spinner when navigation starts
    }
    if (event instanceof NavigationEnd) {
      this.spinner.hide(); // Hide spinner when navigation ends successfully
    }
    if (event instanceof NavigationCancel) {
      this.spinner.hide(); // Hide spinner when navigation is canceled
    }
    if (event instanceof NavigationError) {
      this.spinner.hide(); // Hide spinner when navigation ends with an error
    }
  }
}
