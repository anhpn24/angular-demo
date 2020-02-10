import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { AppInterceptorService } from './app.interceptor';
import { PhotoComponent } from './components/photo/photo.component';
import { BreweryComponent } from './components/brewery/brewery.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HighLightDirective } from './directives/high-light.directive';
import { CurrencyUnitPipe } from './pipes/currency-unit.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PhotoComponent,
    BreweryComponent,
    HighLightDirective,
    CurrencyUnitPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
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
