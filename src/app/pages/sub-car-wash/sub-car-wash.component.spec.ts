import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCarWashComponent } from './sub-car-wash.component';

describe('SubCarWashComponent', () => {
  let component: SubCarWashComponent;
  let fixture: ComponentFixture<SubCarWashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubCarWashComponent]
    });
    fixture = TestBed.createComponent(SubCarWashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
