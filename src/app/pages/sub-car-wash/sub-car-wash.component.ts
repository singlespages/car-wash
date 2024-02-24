import {AfterViewInit, Component} from '@angular/core';
import Swiper from "swiper";
@Component({
  selector: 'app-sub-car-wash',
  templateUrl: './sub-car-wash.component.html',
  styleUrls: ['./sub-car-wash.component.scss']
})
export class SubCarWashComponent implements AfterViewInit{

  constructor() {

  }

  ngAfterViewInit(): void {
    const mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      slidesPerView: 1,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: "bullets"
      },
      spaceBetween: 20
    });


  }

}
