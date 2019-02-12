import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSiderbarComponent } from './dashboard-siderbar.component';

describe('DashboardSiderbarComponent', () => {
  let component: DashboardSiderbarComponent;
  let fixture: ComponentFixture<DashboardSiderbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSiderbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSiderbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
