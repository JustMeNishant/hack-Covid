import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortedEmpsComponent } from './sorted-emps.component';

describe('SortedEmpsComponent', () => {
  let component: SortedEmpsComponent;
  let fixture: ComponentFixture<SortedEmpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortedEmpsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortedEmpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
