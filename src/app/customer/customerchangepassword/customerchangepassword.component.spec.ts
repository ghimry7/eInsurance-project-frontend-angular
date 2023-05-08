import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerchangepasswordComponent } from './customerchangepassword.component';

describe('CustomerchangepasswordComponent', () => {
  let component: CustomerchangepasswordComponent;
  let fixture: ComponentFixture<CustomerchangepasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerchangepasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerchangepasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
