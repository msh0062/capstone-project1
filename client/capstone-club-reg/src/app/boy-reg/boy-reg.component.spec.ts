import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoyRegComponent } from './boy-reg.component';

describe('BoyRegComponent', () => {
  let component: BoyRegComponent;
  let fixture: ComponentFixture<BoyRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoyRegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoyRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
