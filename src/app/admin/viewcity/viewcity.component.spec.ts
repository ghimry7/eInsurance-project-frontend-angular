import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcityComponent } from './viewcity.component';

describe('ViewcityComponent', () => {
  let component: ViewcityComponent;
  let fixture: ComponentFixture<ViewcityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewcityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
