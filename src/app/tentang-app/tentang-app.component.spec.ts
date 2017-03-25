import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {TentangAppComponent} from "./tentang-app.component";

describe('TentangAppComponent', () => {
  let component: TentangAppComponent;
  let fixture: ComponentFixture<TentangAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TentangAppComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TentangAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
