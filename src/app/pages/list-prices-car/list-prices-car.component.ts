import { Component } from '@angular/core';

@Component({
  selector: 'app-list-prices-car',
  templateUrl: './list-prices-car.component.html',
  styleUrls: ['./list-prices-car.component.scss']
})
export class ListPricesCarComponent {

  accordionItems = [
    { title: 'Item 1', content: [{ nombre: 'Servicio 1', precio: 10 }, { nombre: 'Servicio 2', precio: 20 }], expanded: false },
    { title: 'Item 2', content: [{ nombre: 'Servicio 3', precio: 15 }, { nombre: 'Servicio 4', precio: 25 }], expanded: false },
    { title: 'Item 3', content: [{ nombre: 'Servicio 5', precio: 30 }, { nombre: 'Servicio 6', precio: 40 }], expanded: false }
  ];

  toggleAccordionItem(index: number): void {
    this.accordionItems[index].expanded = !this.accordionItems[index].expanded;
  }

}
