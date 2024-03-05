import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import Swiper, {SwiperOptions} from "swiper";
@Component({
  selector: 'app-sub-car-wash',
  templateUrl: './sub-car-wash.component.html',
  styleUrls: ['./sub-car-wash.component.scss']
})
export class SubCarWashComponent implements OnInit, AfterViewInit, OnDestroy{
  public swiper!: Swiper;
  public swiperConfig: SwiperOptions = {
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
    // Tu configuración de Swiper
  };
  constructor() {

  }

    ngOnInit() {

    }




  ngAfterViewInit(): void {
    this.swiper = new Swiper('.swiper-container', this.swiperConfig);
  }

  ngOnDestroy(): void {

  }

}
