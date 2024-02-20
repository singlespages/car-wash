import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubBarberShopComponent } from './sub-barber-shop.component';

describe('SubBarberShopComponent', () => {
  let component: SubBarberShopComponent;
  let fixture: ComponentFixture<SubBarberShopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubBarberShopComponent]
    });
    fixture = TestBed.createComponent(SubBarberShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
