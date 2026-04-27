import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Matmodal } from './matmodal';

describe('Matmodal', () => {
  let component: Matmodal;
  let fixture: ComponentFixture<Matmodal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Matmodal],
    }).compileComponents();

    fixture = TestBed.createComponent(Matmodal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
