import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PictureService } from './picture.service';

export interface Picture {
  albumId?: number;
  id?: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  pictures$: Observable<Picture[]>;

  constructor(private pictureService: PictureService) {
  }

  ngOnInit() {
  }

}
