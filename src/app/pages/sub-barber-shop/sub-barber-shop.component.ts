import {AfterViewInit, Component} from '@angular/core';
import Swiper from "swiper";

@Component({
  selector: 'app-sub-barber-shop',
  templateUrl: './sub-barber-shop.component.html',
  styleUrls: ['./sub-barber-shop.component.scss']
})
export class SubBarberShopComponent  implements AfterViewInit{
  ngAfterViewInit(): void {
    const mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      slidesPerView: 1,
      loop: true,
      freeMode: true,
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: "bullets"
      },
      spaceBetween: 20
    });

  }

}
