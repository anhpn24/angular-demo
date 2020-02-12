import { Component, OnInit } from '@angular/core';

// NgRx
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Tutorial } from '../../models/tutorial.model';
import { AppState } from '../../app.state';
import * as TutorialActions from '../../actions/tutorial.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clickCounter: number = 0;
  color: string = '';
  currencyUnit = '';
  price = 3000;
  closeResult: string = '';

  // NgRx
  tutorials: Observable<Tutorial[]>;
  constructor(private store: Store<AppState>) {
    this.tutorials = store.select('tutorial');
  }

  addTutorial(name, url) {
    this.store.dispatch(new TutorialActions.AddTutorial({name: name, url: url}) )
  }

  delTutorial(index) {
    this.store.dispatch(new TutorialActions.RemoveTutorial(index) )
  }

  ngOnInit() {
  }

  countClick() {
    this.clickCounter += 1;
  }

  setClasses() {
    let myClasses = {
      'active' : this.clickCounter > 4,
      'no-active' : this.clickCounter <= 4
    }
    return myClasses;
  }  
  
}
