import { Component, OnInit } from '@angular/core';

import { BreweryService } from 'src/app/services/brewery.service';

@Component({
  selector: 'app-brewery',
  templateUrl: './brewery.component.html',
  styleUrls: ['./brewery.component.scss']
})
export class BreweryComponent implements OnInit {

  brews: Object;

  constructor(private breweryService: BreweryService) { }

  ngOnInit() {
    this.breweryService.getAll().subscribe(data => (this.brews = data));
  }

}
