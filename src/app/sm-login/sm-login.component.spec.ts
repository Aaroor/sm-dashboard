import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmLoginComponent } from './sm-login.component';

describe('SmLoginComponent', () => {
  let component: SmLoginComponent;
  let fixture: ComponentFixture<SmLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
