import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileclaimComponent } from './profileclaim.component';

describe('ProfileclaimComponent', () => {
  let component: ProfileclaimComponent;
  let fixture: ComponentFixture<ProfileclaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileclaimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileclaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
