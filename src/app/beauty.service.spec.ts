import { TestBed, inject } from '@angular/core/testing';

import { BeautyService } from './beauty.service';

describe('BeautyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeautyService]
    });
  });

  it('should be created', inject([BeautyService], (service: BeautyService) => {
    expect(service).toBeTruthy();
  }));
});
