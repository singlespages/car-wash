import { Component } from '@angular/core';

@Component({
  selector: 'app-list-prices-car',
  templateUrl: './list-prices-car.component.html',
  styleUrls: ['./list-prices-car.component.scss']
})
export class ListPricesCarComponent {

  accordionItems: any = [
    { title: 'Taxi', content: [
      { nombre: 'Lavado', precio: 15, color: '#FFFFFF' },
      { nombre: 'Lavado + abajo', precio: 20, color: '#000000', text: '#FFFFFF' },
      { nombre: 'Lavado + motor', precio: 20, color: '#FDD04E' },
      { nombre: 'Lavado general', precio: 30, color: '#000000', text: '#FFFFFF' },
      { nombre: 'Cera a mano', precio: 20, color: '#FDD04E' },
      { nombre: 'Cera a maquina', precio: 30, color: '#FFFFFF' },
      { nombre: 'Motor a vapor', precio: 35, color: '#000000', text: '#FFFFFF' },
      { nombre: 'Desinfección A/A a vapor', precio: 25, color: '#FDD04E' },
      { nombre: 'Limpieza de farolas', precio: 40,  color: '#000000', text: '#FFFFFF'},
      { nombre: 'Hidratación cuero', precio: 10, color: '#FFFFFF' },
      { nombre: 'Hidratación partes negras', precio: 10, color: '#FDD04E'},
      { nombre: 'Exceso de barro', precio: 5, color: '#FFFFFF'  },
      { nombre: 'Aspirada', precio: 10, color: '#FFFFFF' },
      { nombre: 'Polichada moto', precio: '', color: '#FDD04E' },
      { nombre: 'Over haul', precio: 200, color: '#FDD04E' },
      { nombre: 'Polichada', precio: 150, color: '#FDD04E' },
      { nombre: 'Limpieza cojineria', precio: 100, color: '#000000', text: '#FFFFFF'  },
      { nombre: 'Alfombras', precio: 60, color: '#FFFFFF' },
      { nombre: 'Combo 1', precio: 70, color: '#000000', combo: '(Gral + cera a mano + grafito)', text: '#FFFFFF' },
      { nombre: 'Combo 2', precio: 100, color: '#000000', combo: '(Lavado Gral + motor a vapor + cera a maquina)', text: '#FFFFFF' },
      { nombre: 'Combo 3', precio: 350, color: '#000000', combo: '(Polichada+ Overhaul+motor a vapor)', text: '#FFFFFF' },
    ],
    expanded: false
    },
    { title: 'Automovil', content: [
        { nombre: 'Lavado', precio: 15, color: '#FFFFFF' },
        { nombre: 'Lavado + abajo', precio: 25, color: '#000000', text: '#FFFFFF' },
        { nombre: 'Lavado + motor', precio: 25, color: '#FDD04E' },
        { nombre: 'Lavado general', precio: 30, color: '#000000', text: '#FFFFFF' },
        { nombre: 'Cera a mano', precio: 20, color: '#FDD04E' },
        { nombre: 'Cera a maquina', precio: 30, color: '#FFFFFF' },
        { nombre: 'Motor a vapor', precio: 35, color: '#000000', text: '#FFFFFF' },
        { nombre: 'Desinfección A/A a vapor', precio: 25, color: '#FDD04E' },
        { nombre: 'Limpieza de farolas', precio: 40,  color: '#000000', text: '#FFFFFF'},
        { nombre: 'Hidratación cuero', precio: 10, color: '#FFFFFF' },
        { nombre: 'Hidratación partes negras', precio: 10, color: '#FDD04E'},
        { nombre: 'Exceso de barro', precio: 5, color: '#FFFFFF'  },
        { nombre: 'Aspirada', precio: 10, color: '#FFFFFF' },
        { nombre: 'Polichada moto', precio: '', color: '#FDD04E' },
        { nombre: 'Over haul', precio: 250, color: '#FDD04E' },
        { nombre: 'Polichada', precio: 150, color: '#FDD04E' },
        { nombre: 'Limpieza cojineria', precio: 100, color: '#000000', text: '#FFFFFF'  },
        { nombre: 'Alfombras', precio: 80, color: '#FFFFFF' },
        { nombre: 'Combo 1', precio: 80, color: '#000000', combo: '(Gral + cera a mano + grafito)', text: '#FFFFFF' },
        { nombre: 'Combo 2', precio: 120, color: '#000000', combo: '(Lavado Gral + motor a vapor + cera a maquina)', text: '#FFFFFF' },
        { nombre: 'Combo 3', precio: 400, color: '#000000', combo: '(Polichada+ Overhaul+motor a vapor)', text: '#FFFFFF' },
      ],
      expanded: false
    },
    { title: 'Camioneta', content: [
        { nombre: 'Lavado', precio: 20, color: '#FFFFFF' },
        { nombre: 'Lavado + abajo', precio: 35, color: '#000000', text: '#FFFFFF' },
        { nombre: 'Lavado + motor', precio: 35, color: '#FDD04E' },
        { nombre: 'Lavado general', precio: 30, color: '#000000', text: '#FFFFFF' },
        { nombre: 'Cera a mano', precio: 20, color: '#FDD04E' },
        { nombre: 'Cera a maquina', precio: 30, color: '#FFFFFF' },
        { nombre: 'Motor a vapor', precio: 45, color: '#000000', text: '#FFFFFF' },
        { nombre: 'Desinfección A/A a vapor', precio: 30, color: '#FDD04E' },
        { nombre: 'Limpieza de farolas', precio: 40,  color: '#000000', text: '#FFFFFF'},
        { nombre: 'Hidratación cuero', precio: 10, color: '#FFFFFF' },
        { nombre: 'Hidratación partes negras', precio: 10, color: '#FDD04E'},
        { nombre: 'Exceso de barro', precio: 10, color: '#FFFFFF'  },
        { nombre: 'Aspirada', precio: 10, color: '#FFFFFF' },
        { nombre: 'Polichada moto', precio: '', color: '#FDD04E' },
        { nombre: 'Over haul', precio: 300, color: '#FDD04E' },
        { nombre: 'Polichada', precio: 200, color: '#FDD04E' },
        { nombre: 'Limpieza cojineria', precio: 120, color: '#000000', text: '#FFFFFF'  },
        { nombre: 'Alfombras', precio: 100, color: '#FFFFFF' },
        { nombre: 'Combo 1', precio: 120, color: '#000000', combo: '(Gral + cera a mano + grafito)', text: '#FFFFFF' },
        { nombre: 'Combo 2', precio: 150, color: '#000000', combo: '(Lavado Gral + motor a vapor + cera a maquina)', text: '#FFFFFF' },
        { nombre: 'Combo 3', precio: 550, color: '#000000', combo: '(Polichada+ Overhaul+motor a vapor)', text: '#FFFFFF' },
    ],
      expanded: false
    },
    { title: 'Camioneta gra', content: [
        { nombre: 'Lavado', precio: 25, color: '#FFFFFF' },
        { nombre: 'Lavado + abajo', precio: 35, color: '#000000', text: '#FFFFFF' },
        { nombre: 'Lavado + motor', precio: 25, color: '#FDD04E' },
        { nombre: 'Lavado general', precio: 50, color: '#000000', text: '#FFFFFF' },
        { nombre: 'Cera a mano', precio: 20, color: '#FDD04E' },
        { nombre: 'Cera a maquina', precio: 30, color: '#FFFFFF' },
        { nombre: 'Motor a vapor', precio: 45, color: '#000000', text: '#FFFFFF' },
        { nombre: 'Desinfección A/A a vapor', precio: 30, color: '#FDD04E' },
        { nombre: 'Limpieza de farolas', precio: 40,  color: '#000000', text: '#FFFFFF'},
        { nombre: 'Hidratación cuero', precio: 10, color: '#FFFFFF' },
        { nombre: 'Hidratación partes negras', precio: 10, color: '#FDD04E'},
        { nombre: 'Exceso de barro', precio: 10, color: '#FFFFFF'  },
        { nombre: 'Aspirada', precio: 10, color: '#FFFFFF' },
        { nombre: 'Polichada moto', precio: '', color: '#FDD04E' },
        { nombre: 'Over haul', precio: 300, color: '#FDD04E' },
        { nombre: 'Polichada', precio: 300, color: '#FDD04E' },
        { nombre: 'Limpieza cojineria', precio: 120, color: '#000000', text: '#FFFFFF'  },
        { nombre: 'Alfombras', precio: 100, color: '#FFFFFF' },
        { nombre: 'Combo 1', precio: 120, color: '#000000', combo: '(Gral + cera a mano + grafito)', text: '#FFFFFF' },
        { nombre: 'Combo 2', precio: 180, color: '#000000', combo: '(Lavado Gral + motor a vapor + cera a maquina)', text: '#FFFFFF' },
        { nombre: 'Combo 3', precio: 550, color: '#000000', combo: '(Polichada+ Overhaul+motor a vapor)', text: '#FFFFFF' },
    ],
      expanded: false
    },
    { title: 'Buseta', content: [
        { nombre: 'Lavado', precio: 40, color: '#FFFFFF' },
        { nombre: 'Lavado + abajo', precio: 45, color: '#000000', text: '#FFFFFF' },
        { nombre: 'Lavado + motor', precio: 70, color: '#FDD04E' },
        { nombre: 'Lavado general', precio: 80, color: '#000000', text: '#FFFFFF' },
        { nombre: 'Cera a mano', precio: 20, color: '#FDD04E' },
        { nombre: 'Cera a maquina', precio: 50, color: '#FFFFFF' },
        { nombre: 'Motor a vapor', precio: 45, color: '#000000', text: '#FFFFFF' },
        { nombre: 'Desinfección A/A a vapor', precio: 30, color: '#FDD04E' },
        { nombre: 'Limpieza de farolas', precio: 40,  color: '#000000', text: '#FFFFFF'},
        { nombre: 'Hidratación cuero', precio: 15, color: '#FFFFFF' },
        { nombre: 'Hidratación partes negras', precio: 10, color: '#FDD04E'},
        { nombre: 'Exceso de barro', precio: 10, color: '#FFFFFF'  },
        { nombre: 'Aspirada', precio: 10, color: '#FFFFFF' },
        { nombre: 'Polichada moto', precio: '', color: '#FDD04E' },
        { nombre: 'Over haul', precio: 300, color: '#FDD04E' },
        { nombre: 'Polichada', precio: 350, color: '#FDD04E' },
        { nombre: 'Limpieza cojineria', precio: 150, color: '#000000', text: '#FFFFFF'  },
        { nombre: 'Alfombras', precio: 120, color: '#FFFFFF' },
        { nombre: 'Combo 1', precio: 150, color: '#000000', combo: '(Gral + cera a mano + grafito)', text: '#FFFFFF' },
        { nombre: 'Combo 2', precio: 200, color: '#000000', combo: '(Lavado Gral + motor a vapor + cera a maquina)', text: '#FFFFFF' },
        { nombre: 'Combo 3', precio: 600, color: '#000000', combo: '(Polichada+ Overhaul+motor a vapor)', text: '#FFFFFF' },
      ],
    expanded: false },
    { title: 'Furgón peq', content: [
        { nombre: 'Lavado', precio: 40, color: '#FFFFFF' },
        { nombre: 'Lavado + abajo', precio: 45, color: '#000000', text: '#FFFFFF' },
        { nombre: 'Lavado + motor', precio: 70, color: '#FDD04E' },
        { nombre: 'Lavado general', precio: 60, color: '#000000', text: '#FFFFFF' },
        { nombre: 'Cera a mano', precio: 30, color: '#FDD04E' },
        { nombre: 'Cera a maquina', precio: 50, color: '#FFFFFF' },
        { nombre: 'Motor a vapor', precio: 45, color: '#000000', text: '#FFFFFF' },
        { nombre: 'Desinfección A/A a vapor', precio: 30, color: '#FDD04E' },
        { nombre: 'Limpieza de farolas', precio: 40,  color: '#000000', text: '#FFFFFF'},
        { nombre: 'Hidratación cuero', precio: 15, color: '#FFFFFF' },
        { nombre: 'Hidratación partes negras', precio: 10, color: '#FDD04E'},
        { nombre: 'Exceso de barro', precio: 10, color: '#FFFFFF'  },
        { nombre: 'Aspirada', precio: 10, color: '#FFFFFF' },
        { nombre: 'Polichada moto', precio: '', color: '#FDD04E' },
        { nombre: 'Over haul', precio: 300, color: '#FDD04E' },
        { nombre: 'Polichada', precio: 400, color: '#FDD04E' },
        { nombre: 'Limpieza cojineria', precio: 150, color: '#000000', text: '#FFFFFF'  },
        { nombre: 'Alfombras', precio: 120, color: '#FFFFFF' },
        { nombre: 'Combo 1', precio: 150, color: '#000000', combo: '(Gral + cera a mano + grafito)', text: '#FFFFFF' },
        { nombre: 'Combo 2', precio: 200, color: '#000000', combo: '(Lavado Gral + motor a vapor + cera a maquina)', text: '#FFFFFF' },
        { nombre: 'Combo 3', precio: 600, color: '#000000', combo: '(Polichada+ Overhaul+motor a vapor)', text: '#FFFFFF' },
      ],
    expanded: false },
    { title: 'Furgón gra', content: [
        { nombre: 'Lavado', precio: 40, color: '#FFFFFF' },
        { nombre: 'Lavado + abajo', precio: 45, color: '#000000', text: '#FFFFFF' },
        { nombre: 'Lavado + motor', precio: 70, color: '#FDD04E' },
        { nombre: 'Lavado general', precio: 80, color: '#000000', text: '#FFFFFF' },
        { nombre: 'Cera a mano', precio: 30, color: '#FDD04E' },
        { nombre: 'Cera a maquina', precio: 50, color: '#FFFFFF' },
        { nombre: 'Motor a vapor', precio: 45, color: '#000000', text: '#FFFFFF' },
        { nombre: 'Desinfección A/A a vapor', precio: 30, color: '#FDD04E' },
        { nombre: 'Limpieza de farolas', precio: 40,  color: '#000000', text: '#FFFFFF'},
        { nombre: 'Hidratación cuero', precio: 15, color: '#FFFFFF' },
        { nombre: 'Hidratación partes negras', precio: 10, color: '#FDD04E'},
        { nombre: 'Exceso de barro', precio: 10, color: '#FFFFFF'  },
        { nombre: 'Aspirada', precio: 10, color: '#FFFFFF' },
        { nombre: 'Polichada moto', precio: '', color: '#FDD04E' },
        { nombre: 'Over haul', precio: 300, color: '#FDD04E' },
        { nombre: 'Polichada', precio: 350, color: '#FDD04E' },
        { nombre: 'Limpieza cojineria', precio: 150, color: '#000000', text: '#FFFFFF'  },
        { nombre: 'Alfombras', precio: 120, color: '#FFFFFF' },
        { nombre: 'Combo 1', precio: 150, color: '#000000', combo: '(Gral + cera a mano + grafito)', text: '#FFFFFF' },
        { nombre: 'Combo 2', precio: 200, color: '#000000', combo: '(Lavado Gral + motor a vapor + cera a maquina)', text: '#FFFFFF' },
        { nombre: 'Combo 3', precio: 600, color: '#000000', combo: '(Polichada+ Overhaul+motor a vapor)', text: '#FFFFFF' },
    ],
      expanded: false
    },
    { title: 'Motos', content: [
        { nombre: 'Lavado', precio: 10, color: '#FFFFFF' },
        { nombre: 'Lavado + abajo', precio: '', color: '#000000', text: '#FFFFFF' },
        { nombre: 'Lavado + motor', precio: '', color: '#FDD04E' },
        { nombre: 'Lavado general', precio: 12, color: '#000000', text: '#FFFFFF' },
        { nombre: 'Cera a mano', precio: '', color: '#FDD04E' },
        { nombre: 'Cera a maquina', precio: '', color: '#FFFFFF' },
        { nombre: 'Motor a vapor', precio: '', color: '#000000', text: '#FFFFFF' },
        { nombre: 'Desinfección A/A a vapor', precio: '', color: '#FDD04E' },
        { nombre: 'Limpieza de farolas', precio: '',  color: '#000000', text: '#FFFFFF'},
        { nombre: 'Hidratación cuero', precio: '', color: '#FFFFFF' },
        { nombre: 'Hidratación partes negras', precio: 10, color: '#FDD04E'},
        { nombre: 'Exceso de barro', precio: '', color: '#FFFFFF'  },
        { nombre: 'Aspirada', precio: '', color: '#FFFFFF' },
        { nombre: 'Polichada moto', precio: 30, color: '#FDD04E' },
        { nombre: 'Over haul', precio: '', color: '#FDD04E' },
        { nombre: 'Polichada', precio: '', color: '#FDD04E' },
        { nombre: 'Limpieza cojineria', precio: '', color: '#000000', text: '#FFFFFF'  },
        { nombre: 'Alfombras', precio: '', color: '#FFFFFF' },
        { nombre: 'Combo 1', precio: '', color: '#000000', combo: '(Gral + cera a mano + grafito)', text: '#FFFFFF' },
        { nombre: 'Combo 2', precio: '', color: '#000000', combo: '(Lavado Gral + motor a vapor + cera a maquina)', text: '#FFFFFF' },
        { nombre: 'Combo 3', precio: '', color: '#000000', combo: '(Polichada+ Overhaul+motor a vapor)', text: '#FFFFFF' },
      ],
      expanded: false
    },
    { title: 'LAVADO DE CASCOS $ 25K', precio: '', color: '#FDD04E', content: [] },
  ];

  toggleAccordionItem(index: number): void {
    this.accordionItems[index].expanded = !this.accordionItems[index].expanded;
  }

}
