import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewinsurancetypeComponent } from './viewinsurancetype.component';

describe('ViewinsurancetypeComponent', () => {
  let component: ViewinsurancetypeComponent;
  let fixture: ComponentFixture<ViewinsurancetypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewinsurancetypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewinsurancetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
