import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceaccountComponent } from './insuranceaccount.component';

describe('InsuranceaccountComponent', () => {
  let component: InsuranceaccountComponent;
  let fixture: ComponentFixture<InsuranceaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuranceaccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsuranceaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
