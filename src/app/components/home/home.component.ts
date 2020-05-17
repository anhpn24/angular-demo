import { Component, OnInit } from '@angular/core';

// NgRx
import { Observable, merge } from 'rxjs';
import { Store } from '@ngrx/store';
import { Tutorial } from '../../models/tutorial.model';
import { AppState } from '../../app.state';
import * as TutorialActions from '../../actions/tutorial.action';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/validators/must-match.validator';
import { CompareDate, CompareTwoDate } from 'src/app/validators/compare-date.validator';
import { filter } from 'rxjs/operators';

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
  isCheckedProduct: boolean;
  submitted = false;
  timeOut = 2000;
  timeOutAPI = 4000;

  heroForm: FormGroup;
  ageData: any[] = [];
  productData: any[] = [];
  ages: any[] = [
    { id: '01', name: 'proCodes 01' },
    { id: '02', name: 'proCodes 02' },
    { id: '03', name: 'proCodes 03' },
    { id: '04', name: 'proCodes 04' },
    { id: '05', name: 'proCodes 05' },
    { id: '06', name: 'proCodes 06' },
    { id: '07', name: 'proCodes 07' },
    { id: '08', name: 'proCodes 08' },
    { id: '09', name: 'proCodes 09' },
    { id: '10', name: 'proCodes 10' },
    { id: '11', name: 'proCodes 11' },
    { id: '12', name: 'proCodes 12' },
    { id: '13', name: 'proCodes 13' },
    { id: '14', name: 'proCodes 14' }
  ];

  products: any[] = [
    { id: '01', name: 'serviceCodes 01' },
    { id: '02', name: 'serviceCodes 02' },
    { id: '03', name: 'serviceCodes 03' },
    { id: '04', name: 'serviceCodes 04' },
    { id: '05', name: 'serviceCodes 05' },
    { id: '06', name: 'serviceCodes 06' },
    { id: '07', name: 'serviceCodes 07' },
    { id: '08', name: 'serviceCodes 08' },
    { id: '09', name: 'serviceCodes 09' },
    { id: '10', name: 'serviceCodes 10' },
    { id: '11', name: 'serviceCodes 11' },
    { id: '12', name: 'serviceCodes 12' },
    { id: '13', name: 'serviceCodes 13' },
    { id: '14', name: 'serviceCodes 14' }
  ];

  timeCodes: any[] = [
    { id: '01', name: 'Realtime' },
    { id: '02', name: 'Weekend' },
    { id: '03', name: 'Monthly' },
    { id: '04', name: 'Year' },
  ];

  timeCodeData: any[] = [];

  ngOnInit() {
    this.heroForm = this.fb.group({
      transType: '',
      processCodes: '',
      serviceCodes: '',
      timeCode: '',
      name: ['', Validators.required],
      name2: ['', Validators.required],
      group: this.fb.group({
        item1: ['', Validators.required],
        item2: ['', Validators.required]
      }),
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required]
    }, {
      validator: [MustMatch('name', 'name2'), 
                  CompareTwoDate('fromDate', 'toDate')
                  // CompareDate('fromDate', 'toDate')
    ]
    });

    this.loadTimeCode();

    const transTypeChanges = this.heroForm.get('transType').valueChanges;
    const processCodesChanges = this.heroForm.get('processCodes').valueChanges;
    const serviceCodesChanges = this.heroForm.get('serviceCodes').valueChanges;

    const fromDateChanges = this.heroForm.get('fromDate').valueChanges;
    const toDateChanges = this.heroForm.get('toDate').valueChanges;
    fromDateChanges.subscribe(value => {
      localStorage.setItem('lastChange','1');
    });
    toDateChanges.subscribe(value => {
      localStorage.setItem('lastChange','2');
    });

    transTypeChanges.subscribe(value => {
      this.heroForm.get('name').patchValue(value);
    });

    transTypeChanges.subscribe(value => {
      this.ageData = [];
      this.productData = [];
      this.f.processCodes.setValue([]);
      this.f.serviceCodes.setValue([]);
      this.isChecked = false;
      this.isCheckedProduct = false;
      setTimeout(() => {
        this.getAge1(value);
        this.isChecked = (this.ageData.length > 0 && this.ageData.length === this.f.processCodes.value.length) ? true : false;
      }, this.timeOut);
    });

    processCodesChanges.subscribe(value => {
      this.isChecked = this.ageData.length === this.f.processCodes.value.length ? true : false;
      setTimeout(() => {
        this.getProduct(value);
      }, this.timeOut);
    });

    serviceCodesChanges.subscribe(value => {
      this.isCheckedProduct = this.productData.length === this.f.serviceCodes.value.length ? true : false;
    });

    merge(transTypeChanges, processCodesChanges, serviceCodesChanges).subscribe(value => {
      let v1 = this.f.transType.value;
      let v2 = this.f.processCodes.value[0];
      let v3 = this.f.serviceCodes.value[0];
      this.timeCodeData = this.timeCodes.filter(e =>
        (e.id !== '01' && this.checkReal(v1, v2, v3) === 1)
        || (e.id === '01' && this.checkReal(v1, v2, v3) === 2)
        || (this.checkReal(v1, v2, v3) === 0)
      );
    });
  }

  loadTimeCode() {
    setTimeout(() => {
      this.timeCodeData = this.timeCodes;
    }, this.timeOutAPI);
  }

  checkReal(value, value1, value2): number {
    let rel = 0;
    if (value === '01' && value1 === '01') {
      return 1;
    }

    if (value === '01' && value1 === '02') {
      return 0;
    }

    if (value === '03' && value1 === '01' && value2 === '01') {
      return 2
    }

    return rel;
  }

  loadAPI() {
    setTimeout(() => {
      this.heroForm.patchValue({
        transType: '01',
        processCodes: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14'],
        serviceCodes: ['01'],
        name: 'This is a apple'
      });
    }, this.timeOutAPI);
  }

  getAge1(value) {
    if ((value === "01") || (value === "03")) {
      this.ageData = this.ages;
    } else {
      this.ageData = [];
    }
  }

  getProduct(value) {
    if (value.find(v => v === "01")) {
      this.productData = this.products;
    } else {
      this.productData = [];
    }
  }

  updateData(dataUpdated: any) {
    // this.ages = [...this.ages];
    // this.ages = dataUpdated;
    // this.onClear();
    // debugger;
    // this.heroForm.get('ages').patchValue(['01', '02', '03']);
    // console.log(this.ages);
  }

  onCheckedAll(e) {
    this.isChecked = e.currentTarget.checked;
    if (this.isChecked) {
      const selected = this.ageData.map(item => item.id);
      this.heroForm.get('processCodes').patchValue(selected);
    } else {
      this.heroForm.get('processCodes').patchValue([]);
      this.isChecked = false;
    }
  }

  onCheckedAllPro(e) {
    this.isCheckedProduct = e.currentTarget.checked;
    if (this.isCheckedProduct) {
      const selected = this.productData.map(item => item.id);
      this.heroForm.get('serviceCodes').patchValue(selected);
    } else {
      this.heroForm.get('serviceCodes').patchValue([]);
    }
  }

  clickMe() {
    this.updateData([{ id: '01', name: 'More than 01' },
    { id: '02', name: 'More than 02' },
    { id: '03', name: 'More than 03' }]);
  }

  onClear() {
    this.isChecked = false;
    this.heroForm.get('processCodes').patchValue([]);
  }

  onClearProduct() {
    this.isCheckedProduct = false;
    this.heroForm.get('serviceCodes').patchValue([]);
  }

  get f() { return this.heroForm.controls; }
  get fg() { return this.heroForm.controls.group['controls']; }

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
    this.submitted = true;

    // stop here if form is invalid
    if (this.heroForm.invalid) {
      return;
    }

    console.log(this.fg);
    console.log(this.heroForm.getRawValue());
  }

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
}
