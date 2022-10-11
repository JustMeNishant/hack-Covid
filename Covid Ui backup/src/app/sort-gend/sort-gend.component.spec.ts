import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortGendComponent } from './sort-gend.component';

describe('SortGendComponent', () => {
  let component: SortGendComponent;
  let fixture: ComponentFixture<SortGendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortGendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortGendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
