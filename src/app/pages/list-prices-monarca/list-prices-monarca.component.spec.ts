import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPricesMonarcaComponent } from './list-prices-monarca.component';

describe('ListPricesMonarcaComponent', () => {
  let component: ListPricesMonarcaComponent;
  let fixture: ComponentFixture<ListPricesMonarcaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListPricesMonarcaComponent]
    });
    fixture = TestBed.createComponent(ListPricesMonarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
