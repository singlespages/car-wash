import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: "full", redirectTo: ''
  },
  {
    path: '**',
    pathMatch: "full", redirectTo: ''
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking',
    scrollPositionRestoration: 'enabled', // or 'top'
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64], // [x, y] - adjust scroll offset
    onSameUrlNavigation: 'reload'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
