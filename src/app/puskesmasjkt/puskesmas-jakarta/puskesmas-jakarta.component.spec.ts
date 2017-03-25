import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PuskesmasJakartaComponent} from './puskesmas-jakarta.component';

describe('PuskesmasJakartaComponent', () => {
  let component: PuskesmasJakartaComponent;
  let fixture: ComponentFixture<PuskesmasJakartaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PuskesmasJakartaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuskesmasJakartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
