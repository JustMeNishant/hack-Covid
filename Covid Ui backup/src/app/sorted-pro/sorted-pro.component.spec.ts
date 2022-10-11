import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortedProComponent } from './sorted-pro.component';

describe('SortedProComponent', () => {
  let component: SortedProComponent;
  let fixture: ComponentFixture<SortedProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortedProComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortedProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
