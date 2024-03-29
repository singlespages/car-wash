import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SubBarberShopComponent } from './pages/sub-barber-shop/sub-barber-shop.component';
import { SubCarWashComponent } from './pages/sub-car-wash/sub-car-wash.component';
import { ListPriceComponent } from './pages/list-price/list-price.component';
import {OverlayModule} from "@angular/cdk/overlay";
import { ListPricesCarComponent } from './pages/list-prices-car/list-prices-car.component';
import { ListPricesMonarcaComponent } from './pages/list-prices-monarca/list-prices-monarca.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SubBarberShopComponent,
    SubCarWashComponent,
    ListPriceComponent,
    ListPriceComponent,
    ListPricesCarComponent,
    ListPricesMonarcaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
