import { Component, Input, OnInit } from '@angular/core';

import { Picture } from '../app.component';


@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']
})
export class PictureComponent implements OnInit {

  @Input() picture: Picture;

  constructor() {
  }

  ngOnInit() {
  }

}
