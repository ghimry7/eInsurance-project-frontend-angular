import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommissionwithdrawalComponent } from './commissionwithdrawal.component';

describe('CommissionwithdrawalComponent', () => {
  let component: CommissionwithdrawalComponent;
  let fixture: ComponentFixture<CommissionwithdrawalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommissionwithdrawalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommissionwithdrawalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
