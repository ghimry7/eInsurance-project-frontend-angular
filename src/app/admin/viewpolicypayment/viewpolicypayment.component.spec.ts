import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpolicypaymentComponent } from './viewpolicypayment.component';

describe('ViewpolicypaymentComponent', () => {
  let component: ViewpolicypaymentComponent;
  let fixture: ComponentFixture<ViewpolicypaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewpolicypaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewpolicypaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
