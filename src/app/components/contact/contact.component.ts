import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import { Tutorial } from '../../models/tutorial.model';
import { AppState } from '../../app.state';
import * as TutorialActions from '../../actions/tutorial.action';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  messageForm: FormGroup;
  submitted: boolean = false;
  success: boolean = false;

  constructor(private formBuilder: FormBuilder, private store: Store<AppState>) {
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.messageForm.invalid) {
      return;
    }

    this.addTutorial(this.messageForm.controls.name.value, this.messageForm.controls.message.value);
    this.success = false;
  }

  ngOnInit() {
  }

  addTutorial(name, url) {
    this.store.dispatch(new TutorialActions.AddTutorial({ name: name, url: url }))
  }

}
