import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddinsuranceschemeComponent } from './addinsurancescheme.component';

describe('AddinsuranceschemeComponent', () => {
  let component: AddinsuranceschemeComponent;
  let fixture: ComponentFixture<AddinsuranceschemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddinsuranceschemeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddinsuranceschemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
