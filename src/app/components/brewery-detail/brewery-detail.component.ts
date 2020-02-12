import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreweryService } from 'src/app/services/brewery.service';

@Component({
  selector: 'app-brewery-detail',
  templateUrl: './brewery-detail.component.html',
  styleUrls: ['./brewery-detail.component.scss']
})
export class BreweryDetailComponent implements OnInit {

  brewery: Object;

  constructor(private route: ActivatedRoute, private breweryService: BreweryService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let id = +params.get('id');
      console.log(id);
      this.breweryService.getById(id).subscribe(data => (this.brewery = data));
    });
  }

}
