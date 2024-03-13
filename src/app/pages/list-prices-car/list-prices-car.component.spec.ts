import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPricesCarComponent } from './list-prices-car.component';

describe('ListPricesCarComponent', () => {
  let component: ListPricesCarComponent;
  let fixture: ComponentFixture<ListPricesCarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListPricesCarComponent]
    });
    fixture = TestBed.createComponent(ListPricesCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
