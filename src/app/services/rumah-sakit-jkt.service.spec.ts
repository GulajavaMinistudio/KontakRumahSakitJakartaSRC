import { TestBed, inject } from '@angular/core/testing';

import { RumahSakitJktService } from './rumah-sakit-jkt.service';

describe('RumahSakitJktService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RumahSakitJktService]
    });
  });

  it('should ...', inject([RumahSakitJktService], (service: RumahSakitJktService) => {
    expect(service).toBeTruthy();
  }));
});
