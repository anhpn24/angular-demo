import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router ) {
    this.router.events.subscribe(
      (event: any) => {
        if (event instanceof NavigationEnd) {
          console.log('this.router.url', this.router.url);
        }
      }
    );
  }
}
