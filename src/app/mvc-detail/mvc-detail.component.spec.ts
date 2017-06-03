import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MvcDetailComponent } from './mvc-detail.component';

describe('MvcDetailComponent', () => {
  let component: MvcDetailComponent;
  let fixture: ComponentFixture<MvcDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MvcDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MvcDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
