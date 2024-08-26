import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';


import { Order } from '../models/order';

const ORDER_API = 'http://localhost:8080/api/orders'

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {
      console.log(this.http);
  }

  createOrder(orderData: Order) {
    return this.http.post<Order>(`${ORDER_API}`, orderData);
  }

  getOrder(id: string) : Observable<Order> {
    return this.http.get<Order>(`${ORDER_API}/${id}`);
  }

  getOrders() : Observable<Order[]> {
    return this.http.get<Order[]>(ORDER_API);
  }

  deleteOrder(orderId: number) : Observable<Order[]> {
    return this.http.get<Order[]>(ORDER_API);
  }

}