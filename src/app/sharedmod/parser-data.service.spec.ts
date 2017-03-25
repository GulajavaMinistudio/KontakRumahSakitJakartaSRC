import { TestBed, inject } from '@angular/core/testing';

import { ParserDataService } from './parser-data.service';

describe('ParserDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParserDataService]
    });
  });

  it('should ...', inject([ParserDataService], (service: ParserDataService) => {
    expect(service).toBeTruthy();
  }));
});
