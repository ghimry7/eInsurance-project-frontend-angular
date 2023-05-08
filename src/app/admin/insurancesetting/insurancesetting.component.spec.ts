import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurancesettingComponent } from './insurancesetting.component';

describe('InsurancesettingComponent', () => {
  let component: InsurancesettingComponent;
  let fixture: ComponentFixture<InsurancesettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsurancesettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsurancesettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
