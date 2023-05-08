import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerinsurancedetailComponent } from './customerinsurancedetail.component';

describe('CustomerinsurancedetailComponent', () => {
  let component: CustomerinsurancedetailComponent;
  let fixture: ComponentFixture<CustomerinsurancedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerinsurancedetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerinsurancedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
