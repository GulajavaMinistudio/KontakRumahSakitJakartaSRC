import { TestBed, inject } from '@angular/core/testing';

import { PuskesmasServisService } from './puskesmas-servis.service';

describe('PuskesmasServisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PuskesmasServisService]
    });
  });

  it('should ...', inject([PuskesmasServisService], (service: PuskesmasServisService) => {
    expect(service).toBeTruthy();
  }));
});
