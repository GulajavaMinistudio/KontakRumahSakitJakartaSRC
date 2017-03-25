import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {PelayananMasyComponent} from './pelayanan-masy.component';

describe('PelayananMasyComponent', () => {
  let component: PelayananMasyComponent;
  let fixture: ComponentFixture<PelayananMasyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PelayananMasyComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PelayananMasyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
