import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {HalamanGagalKosongComponent} from "./halaman-gagal-kosong.component";

describe('HalamanGagalKosongComponent', () => {
  let component: HalamanGagalKosongComponent;
  let fixture: ComponentFixture<HalamanGagalKosongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HalamanGagalKosongComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HalamanGagalKosongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
