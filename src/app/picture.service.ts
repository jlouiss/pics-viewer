import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Picture } from './app.component';
import { environment as env } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  constructor(private http: HttpClient) {
  }

  getPictures(): Observable<Picture[]> {
    return this.http.get<Picture[]>(`${env.publicAPIBaseURL}/photos`);
  }

}
