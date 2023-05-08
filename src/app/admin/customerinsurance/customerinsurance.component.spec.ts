import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerinsuranceComponent } from './customerinsurance.component';

describe('CustomerinsuranceComponent', () => {
  let component: CustomerinsuranceComponent;
  let fixture: ComponentFixture<CustomerinsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerinsuranceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerinsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
