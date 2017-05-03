import { TestBed, inject } from '@angular/core/testing';

import { WindowSizeService } from './window-size.service';

describe('WindowSizeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WindowSizeService]
    });
  });

  it('should ...', inject([WindowSizeService], (service: WindowSizeService) => {
    expect(service).toBeTruthy();
  }));
});
