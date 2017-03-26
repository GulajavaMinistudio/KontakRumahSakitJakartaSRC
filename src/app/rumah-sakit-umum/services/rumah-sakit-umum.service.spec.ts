import {inject, TestBed} from '@angular/core/testing';

import {RumahSakitUmumService} from './rumah-sakit-umum.service';

describe('RumahSakitUmumService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RumahSakitUmumService]
    });
  });

  it('should ...', inject([RumahSakitUmumService], (service: RumahSakitUmumService) => {
    expect(service).toBeTruthy();
  }));
});
