import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemedisplayComponent } from './schemedisplay.component';

describe('SchemedisplayComponent', () => {
  let component: SchemedisplayComponent;
  let fixture: ComponentFixture<SchemedisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchemedisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchemedisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
