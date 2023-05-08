import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpolicyclaimComponent } from './viewpolicyclaim.component';

describe('ViewpolicyclaimComponent', () => {
  let component: ViewpolicyclaimComponent;
  let fixture: ComponentFixture<ViewpolicyclaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewpolicyclaimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewpolicyclaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
