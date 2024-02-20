import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SubBarberShopComponent } from './pages/sub-barber-shop/sub-barber-shop.component';
import { SubCarWashComponent } from './pages/sub-car-wash/sub-car-wash.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SubBarberShopComponent,
    SubCarWashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
