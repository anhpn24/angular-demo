import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

// Attr Directive
import { HighLightDirective } from './directives/high-light.directive';
// Pipe
import { CurrencyUnitPipe } from './pipes/currency-unit.pipe';
// HttpInterceptor
import { AppInterceptorService } from './app.interceptor';
// i18n
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// NgRx
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/tutorial.reducer';

// ng-select
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HighLightDirective,
    CurrencyUnitPipe 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule, // ngModel
    ReactiveFormsModule, // Validate Form
    TranslateModule.forRoot({ // (i18n)
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    StoreModule.forRoot({ // NgRx
      tutorial: reducer
    }),
    NgSelectModule // ng-select
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation (i18n)
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
