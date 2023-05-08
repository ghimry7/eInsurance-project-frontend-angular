import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewinsuranceschemeComponent } from './viewinsurancescheme.component';

describe('ViewinsuranceschemeComponent', () => {
  let component: ViewinsuranceschemeComponent;
  let fixture: ComponentFixture<ViewinsuranceschemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewinsuranceschemeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewinsuranceschemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
