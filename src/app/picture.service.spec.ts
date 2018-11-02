import { TestBed } from '@angular/core/testing';

import { PictureService } from './picture.service';
import { HttpClientModule } from '@angular/common/http';

describe('PictureService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: PictureService = TestBed.get(PictureService);
    expect(service).toBeTruthy();
  });
});
