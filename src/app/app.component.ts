import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';

import { OrderService } from './_services/order.service';
import { ProductService } from './_services/product.service';
import { Order } from './models/order'; 
import { product } from './models/product'; 
import { catchError, forkJoin, throwError } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatSelectModule],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  orders: Order[] = [];
  products: product[] = [];
  myGroup: FormGroup;
  myProduct: FormGroup;
  selectedProduct: product = {} as product;
  newOrder: Order = {} as Order;
  newProduct: product = {} as product;
  totalPrice: number = 0;

  constructor(private orderService: OrderService, private productService: ProductService, private fb: FormBuilder) { 
    this.myGroup = this.fb.group({
      buyer: ['', Validators.required],
      product: [null, Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      totalPrice: [{ value: this.totalPrice, disabled: true }]
    });

    this.myProduct = this.fb.group({
      product: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit() {
    forkJoin([
      this.orderService.getOrders(),
      this.productService.getProducts()
    ]).pipe(
      catchError(error => {
        console.error('Error fetching data:', error);
        return throwError(() => error);
      })
    ).subscribe(([orders, products]) => {
      this.orders = orders;
      this.products = products;
    });
  }

  onSubmit() {
    const newOrder = this.myGroup.value;

    this.newOrder.buyer = newOrder.buyer;
    this.newOrder.product = newOrder.selectedProduct;
    this.newOrder.cnt = newOrder.quantity;
    this.newOrder.totalPrice = this.totalPrice;
  
    this.orderService.createOrder(this.newOrder)
    .pipe(
      catchError(error => {
        console.error('Error creating order:', error);
        return throwError(() => error);
      })
    )
    .subscribe(
      (createdOrder: Order) => {
        console.log('Order created successfully:', createdOrder);
        this.orders.push(createdOrder); // Add the new order to the list
      },
      error => {
        console.error('Error creating order:', error);
      }
    );
  }

  onSubmitProduct() {
    const newProduct = this.myProduct.value;

    this.newProduct.product = newProduct.product;
    this.newProduct.price = newProduct.price;
  
    this.productService.createProduct(this.newProduct)
    .pipe(
      catchError(error => {
        console.error('Error creating new product:', error);
        return throwError(() => error);
      })
    )
    .subscribe(
      (createdProduct: product) => {
        console.log('Product added successfully:', createdProduct);
        this.products.push(createdProduct);
      },
      error => {
        console.error('Error creating new product:', error);
      }
    );
  }

  calculateTotalPrice() {
    const quantity = this.myGroup.get('quantity')?.value || 0;
    const selectedProduct = this.myGroup.get('product')?.value;
    const price = selectedProduct ? selectedProduct.price : 0;
    this.totalPrice = quantity * price;
    this.myGroup.patchValue({ totalPrice: this.totalPrice });
  }
}
