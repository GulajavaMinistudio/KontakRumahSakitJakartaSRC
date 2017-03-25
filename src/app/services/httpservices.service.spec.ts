import {TestBed, inject} from "@angular/core/testing";
import {HttpservicesService} from "./httpservices.service";

describe('HttpservicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpservicesService]
    });
  });

  it('should ...', inject([HttpservicesService], (service: HttpservicesService) => {
    expect(service).toBeTruthy();
  }));
});
