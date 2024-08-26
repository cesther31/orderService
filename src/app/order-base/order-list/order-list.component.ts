import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/order';
import { OrderService } from '../../_services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
})
export class   
 OrderListComponent implements OnInit {
  orders: Order[] = [];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.getOrders()
      .subscribe((data:   
 Order[]) => {
        this.orders = data;
      }, (error) => {
        console.error("Error fetching orders:", error);
      });
  }

  handleRemove(event: Order) {
    this.orders = this.orders.filter(order => order.id !== event.id);
  }
}