import { Component } from '@angular/core';

@Component({
  selector: 'app-list-prices-car',
  templateUrl: './list-prices-car.component.html',
  styleUrls: ['./list-prices-car.component.scss']
})
export class ListPricesCarComponent {

  accordionItems = [
    { title: 'Taxi', content: [{ nombre: 'Lavado', precio: 15 }, { nombre: 'Servicio 2', precio: 20 }], expanded: false },
    { title: 'Automovil', content: [{ nombre: 'Servicio 3', precio: 15 }, { nombre: 'Servicio 4', precio: 25 }], expanded: false },
    { title: 'Camioneta', content: [{ nombre: 'Servicio 5', precio: 30 }, { nombre: 'Servicio 6', precio: 40 }], expanded: false },
    { title: 'Camioneta gra', content: [{ nombre: 'Servicio 5', precio: 30 }, { nombre: 'Servicio 6', precio: 40 }], expanded: false },
    { title: 'Buseta', content: [{ nombre: 'Servicio 5', precio: 30 }, { nombre: 'Servicio 6', precio: 40 }], expanded: false },
    { title: 'Furgón peq', content: [{ nombre: 'Servicio 5', precio: 30 }, { nombre: 'Servicio 6', precio: 40 }], expanded: false },
    { title: 'Furgón gra', content: [{ nombre: 'Servicio 5', precio: 30 }, { nombre: 'Servicio 6', precio: 40 }], expanded: false },
    { title: 'Motos', content: [{ nombre: 'Servicio 5', precio: 30 }, { nombre: 'Servicio 6', precio: 40 }], expanded: false },
  ];

  toggleAccordionItem(index: number): void {
    this.accordionItems[index].expanded = !this.accordionItems[index].expanded;
  }

}
