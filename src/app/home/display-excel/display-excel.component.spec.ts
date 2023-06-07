import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayExcelComponent } from './display-excel.component';

describe('DisplayExcelComponent', () => {
  let component: DisplayExcelComponent;
  let fixture: ComponentFixture<DisplayExcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayExcelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
