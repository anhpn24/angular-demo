import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  constructor(private photoService: PhotoService) { }

  photos: Object;
  ngOnInit() {
    this.photoService.getAll().subscribe(data => (this.photos = data.slice(0, 10)));
  }

}
