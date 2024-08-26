import { AfterContentInit, Component, ContentChild, ContentChildren, EventEmitter, Input, OnInit, Output, QueryList } from '@angular/core';
import { Order } from 'src/app/models/order';
import { OrderListComponent } from '../order-list/order-list.component';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit, AfterContentInit {
  @ContentChildren("contentRef") contentList!: any;
  @Input()
  detail!: Order;

  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  constructor() {
  }
  ngAfterContentInit(): void {
    console.log(this.contentList);
  }

  ngOnInit(): void {
  }

  onRemove() {
    this.remove.emit(this.detail);
  }

}