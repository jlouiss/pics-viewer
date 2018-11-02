import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PictureService } from './picture.service';
import { map } from 'rxjs/operators';

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
  limit = 150;

  constructor(private pictureService: PictureService) {
  }

  ngOnInit() {
    this.pictures$ = this.pictureService.getPictures()
      .pipe(map(this.limitResults.bind(this)));
  }

  onSearch(keyword: string): void {
    const regexp = new RegExp(keyword, 'gi');
    this.pictures$ = this.pictureService.getPictures()
      .pipe(
        map(pictures => pictures.filter(p => p.title.match(regexp))),
        map(this.limitResults.bind(this))
      );
  }

  limitResults(pictures: Picture[]): Picture[] {
    return pictures.splice(0, this.limit);
  }

}
