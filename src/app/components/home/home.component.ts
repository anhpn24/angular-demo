import { Component, OnInit } from '@angular/core';

// NgRx
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Tutorial } from '../../models/tutorial.model';
import { AppState } from '../../app.state';
import * as TutorialActions from '../../actions/tutorial.action';
import { FormGroup, FormBuilder } from '@angular/forms';

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
  isChecked: boolean;

  heroForm: FormGroup;
  ages: any[] = [
    { id: '01', name: 'More than 01' },
    { id: '02', name: 'More than 02' },
    { id: '03', name: 'More than 03' },
    { id: '04', name: 'More than 04' },
    { id: '05', name: 'More than 05' },
    { id: '06', name: 'More than 06' },
    { id: '07', name: 'More than 07' },
    { id: '08', name: 'More than 08' },
    { id: '09', name: 'More than 09' },
    { id: '10', name: 'More than 10' },
    { id: '11', name: 'More than 11' },
    { id: '12', name: 'More than 12' },
    { id: '13', name: 'More than 13' },
    { id: '14', name: 'More than 14' }
  ];

  // NgRx
  tutorials: Observable<Tutorial[]>;
  constructor(private store: Store<AppState>, private fb: FormBuilder) {
    this.tutorials = store.select('tutorial');
  }

  addTutorial(name, url) {
    this.store.dispatch(new TutorialActions.AddTutorial({ name: name, url: url }))
  }

  delTutorial(index) {
    this.store.dispatch(new TutorialActions.RemoveTutorial(index))
  }

  ngOnInit() {
    this.heroForm = this.fb.group({
      age: [],
      age1: '',
    });
  }

  countClick() {
    this.clickCounter += 1;
  }

  setClasses() {
    let myClasses = {
      'active': this.clickCounter > 4,
      'no-active': this.clickCounter <= 4
    }
    return myClasses;
  }

  onSubmit() {
    console.log(this.heroForm.getRawValue());
  }

  onChange(e) {
    this.isChecked = e.currentTarget.checked;
    if (e.currentTarget.checked) {
      const selected = this.ages.map(item => item.id);
      this.heroForm.get('age').patchValue(selected);
    } else {
      this.heroForm.get('age').patchValue([]);
    }
  }

  checkAll() {
    const selected = this.heroForm.get('age').value;
    if (selected.length === this.ages.length) {
      this.isChecked = true;
    } else {
      this.isChecked = false;
    }
  }

}
