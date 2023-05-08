import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxsettingComponent } from './taxsetting.component';

describe('TaxsettingComponent', () => {
  let component: TaxsettingComponent;
  let fixture: ComponentFixture<TaxsettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxsettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxsettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
