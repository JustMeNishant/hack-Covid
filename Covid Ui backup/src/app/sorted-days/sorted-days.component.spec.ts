import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortedDaysComponent } from './sorted-days.component';

describe('SortedDaysComponent', () => {
  let component: SortedDaysComponent;
  let fixture: ComponentFixture<SortedDaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortedDaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortedDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
