import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {ModalService} from "../services/modal.service";

@Component({
  selector: 'app-list-price',
  templateUrl: './list-price.component.html',
  styleUrls: ['./list-price.component.scss']
})
export class ListPriceComponent implements OnInit{
  display$!: Observable<'open' | 'close'>;

  constructor(
    private modalService: ModalService
  ) {
  }

  ngOnInit(): void {
    this.display$ = this.modalService.watch();
  }

  close() {
    this.modalService.close();
  }

}
