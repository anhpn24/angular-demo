import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppInterceptorService } from './app.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HighLightDirective } from './directives/high-light.directive';
import { CurrencyUnitPipe } from './pipes/currency-unit.pipe';

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
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass : AppInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
