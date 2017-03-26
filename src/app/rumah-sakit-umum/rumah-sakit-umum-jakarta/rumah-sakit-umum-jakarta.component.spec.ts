import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RumahSakitUmumJakartaComponent} from './rumah-sakit-umum-jakarta.component';

describe('RumahSakitUmumJakartaComponent', () => {
  let component: RumahSakitUmumJakartaComponent;
  let fixture: ComponentFixture<RumahSakitUmumJakartaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RumahSakitUmumJakartaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RumahSakitUmumJakartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
