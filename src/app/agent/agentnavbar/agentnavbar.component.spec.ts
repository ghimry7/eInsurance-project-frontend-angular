import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentnavbarComponent } from './agentnavbar.component';

describe('AgentnavbarComponent', () => {
  let component: AgentnavbarComponent;
  let fixture: ComponentFixture<AgentnavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentnavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
