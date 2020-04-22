import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleRegisterComponent } from './google-register.component';

describe('GoogleRegisterComponent', () => {
  let component: GoogleRegisterComponent;
  let fixture: ComponentFixture<GoogleRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
