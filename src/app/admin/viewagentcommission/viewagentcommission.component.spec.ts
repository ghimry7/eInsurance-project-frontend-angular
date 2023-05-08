import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewagentcommissionComponent } from './viewagentcommission.component';

describe('ViewagentcommissionComponent', () => {
  let component: ViewagentcommissionComponent;
  let fixture: ComponentFixture<ViewagentcommissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewagentcommissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewagentcommissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
