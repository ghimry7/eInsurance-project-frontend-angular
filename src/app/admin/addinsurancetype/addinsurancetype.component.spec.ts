import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddinsurancetypeComponent } from './addinsurancetype.component';

describe('AddinsurancetypeComponent', () => {
  let component: AddinsurancetypeComponent;
  let fixture: ComponentFixture<AddinsurancetypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddinsurancetypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddinsurancetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
