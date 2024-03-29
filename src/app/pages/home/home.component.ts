import {afterNextRender, Component} from '@angular/core';
import {Router} from "@angular/router";
import * as L from 'leaflet';
import {Overlay, OverlayRef} from "@angular/cdk/overlay";
import {ListPriceComponent} from "../list-price/list-price.component";
import {ComponentPortal} from "@angular/cdk/portal";
import {ModalService} from "../services/modal.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  activeTab = 1;
  activeTabList = 1;
  gallery = 1;
  menuOpen: boolean = false;

  constructor(private router: Router, private modalService: ModalService) {
    this.loadMap();
  }

  changeTab(tabNumber: number) {
    this.activeTab = tabNumber;
  }

  changeTabList(tabNumber: number) {
    this.activeTabList = tabNumber;
  }

  changeGallery(galleryNumber: number) {
    this.gallery = galleryNumber;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  scrollTo(fragment: any): void {
    this.router.navigate([], { fragment: fragment }).then(() => {
      const element = document.getElementById(fragment);
      if (element != undefined) element.scrollIntoView();
    });
  }

  loadMap(): void {
    afterNextRender(() => {
      const maps = L.map('map').setView([10.455538496023737, -73.24735569364775], 20);

      let customIcon: any = {
        iconUrl:'/assets/img/location.png',
        iconSize:[40,40]
    }
      let myIcon = L.icon(customIcon);

      let iconOptions = {
        title:'Car-wash',
        draggable:false,
        icon:myIcon
      }

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'OpenStreetMap'
      }).addTo(maps);


      L.marker([10.455538496023737, -73.24735569364775], iconOptions).addTo(maps);

    })
  }

  open() {
    this.modalService.open();
  }



}
