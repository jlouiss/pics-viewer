import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output() search = new EventEmitter();
  changes$ = new Subject<string>();
  subscription: Subscription;

  constructor() {
  }

  ngOnInit() {
    this.subscription = this.changes$
      .pipe(debounceTime(400))
      .subscribe(keyword => this.search.emit(keyword));
  }

}
