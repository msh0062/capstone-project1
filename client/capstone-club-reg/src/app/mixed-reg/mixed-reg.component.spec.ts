import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixedRegComponent } from './mixed-reg.component';

describe('MixedRegComponent', () => {
  let component: MixedRegComponent;
  let fixture: ComponentFixture<MixedRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MixedRegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MixedRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
