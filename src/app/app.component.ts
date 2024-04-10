import { Component, OnInit, inject } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { UtilsService } from './shared/services/utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'DLR-eCommerce';

  private router: Router = inject(Router)
  private spinner: NgxSpinnerService = inject(NgxSpinnerService)
  private translate: TranslateService = inject(TranslateService)

  ngOnInit(): void {
    this.router.events.subscribe((event: any) => {
      this.navigationInterceptor(event);
    });
    
    this.translate.addLangs(['es']);
    this.translate.setDefaultLang('es');
    this.translate.use('es');
    
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
