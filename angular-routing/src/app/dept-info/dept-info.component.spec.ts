import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptInfoComponent } from './dept-info.component';

describe('DeptInfoComponent', () => {
  let component: DeptInfoComponent;
  let fixture: ComponentFixture<DeptInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeptInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
