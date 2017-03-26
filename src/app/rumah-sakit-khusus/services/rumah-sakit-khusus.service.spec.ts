import {inject, TestBed} from '@angular/core/testing';

import {RumahSakitKhususService} from './rumah-sakit-khusus.service';

describe('RumahSakitKhususService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RumahSakitKhususService]
    });
  });

  it('should ...', inject([RumahSakitKhususService], (service: RumahSakitKhususService) => {
    expect(service).toBeTruthy();
  }));
});
