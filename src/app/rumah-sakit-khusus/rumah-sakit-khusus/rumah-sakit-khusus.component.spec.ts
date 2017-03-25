import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RumahSakitKhususComponent} from './rumah-sakit-khusus.component';

describe('RumahSakitKhususComponent', () => {
  let component: RumahSakitKhususComponent;
  let fixture: ComponentFixture<RumahSakitKhususComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RumahSakitKhususComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RumahSakitKhususComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
