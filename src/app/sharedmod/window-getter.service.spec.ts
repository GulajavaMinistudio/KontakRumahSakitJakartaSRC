import {inject, TestBed} from '@angular/core/testing';

import {WindowGetterService} from './window-getter.service';

describe('WindowGetterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WindowGetterService]
    });
  });

  it('should ...', inject([WindowGetterService], (service: WindowGetterService) => {
    expect(service).toBeTruthy();
  }));
});
