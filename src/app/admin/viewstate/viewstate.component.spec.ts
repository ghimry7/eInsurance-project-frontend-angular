import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewstateComponent } from './viewstate.component';

describe('ViewstateComponent', () => {
  let component: ViewstateComponent;
  let fixture: ComponentFixture<ViewstateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewstateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
