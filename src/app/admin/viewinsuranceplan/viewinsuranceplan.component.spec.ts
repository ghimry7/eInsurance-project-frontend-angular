import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewinsuranceplanComponent } from './viewinsuranceplan.component';

describe('ViewinsuranceplanComponent', () => {
  let component: ViewinsuranceplanComponent;
  let fixture: ComponentFixture<ViewinsuranceplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewinsuranceplanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewinsuranceplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
