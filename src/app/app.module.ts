import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { AppInterceptorService } from './app.interceptor';
import { PhotoComponent } from './components/photo/photo.component';
import { BreweryComponent } from './components/brewery/brewery.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PhotoComponent,
    BreweryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
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
