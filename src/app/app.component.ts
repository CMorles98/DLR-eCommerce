import { Component, OnInit, inject } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
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

  constructor(translate: TranslateService) {
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit(): void {
    this.router.events.subscribe((event: any) => {
      this.navigationInterceptor(event);
    });
  }

  navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this.spinner.show();
    }
    if (event instanceof NavigationEnd) {
      this.spinner.hide();
    }
    if (event instanceof NavigationCancel) {
      this.spinner.hide();
    }
    if (event instanceof NavigationError) {
      this.spinner.hide();
    }
  }
}
