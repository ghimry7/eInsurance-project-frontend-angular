import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddinsuranceplanComponent } from './addinsuranceplan.component';

describe('AddinsuranceplanComponent', () => {
  let component: AddinsuranceplanComponent;
  let fixture: ComponentFixture<AddinsuranceplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddinsuranceplanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddinsuranceplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
