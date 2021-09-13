import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGroupsMembersComponent } from './view-groups-members.component';

describe('ViewGroupsMembersComponent', () => {
  let component: ViewGroupsMembersComponent;
  let fixture: ComponentFixture<ViewGroupsMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewGroupsMembersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGroupsMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
