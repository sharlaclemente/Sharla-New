import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FosterprofileComponent } from './fosterprofile.component';

describe('FosterprofileComponent', () => {
  let component: FosterprofileComponent;
  let fixture: ComponentFixture<FosterprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FosterprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FosterprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
