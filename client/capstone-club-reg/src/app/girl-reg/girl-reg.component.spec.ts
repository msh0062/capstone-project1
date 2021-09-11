import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GirlRegComponent } from './girl-reg.component';

describe('GirlRegComponent', () => {
  let component: GirlRegComponent;
  let fixture: ComponentFixture<GirlRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GirlRegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GirlRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
