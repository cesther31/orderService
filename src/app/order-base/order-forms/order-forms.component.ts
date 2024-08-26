// import { Component, OnInit } from '@angular/core';
// import { switchMap } from 'rxjs/operators'
// import { ActivatedRoute, Params, Router } from '@angular/router';
// import { Order, OrderType } from '../../models/order';
// import { OrderService } from '../../_services/order.service';

// @Component({
//   selector: 'app-order-forms',
//   templateUrl: './order-forms.component.html',
// })

// export class OrderFormsComponent implements OnInit {
//   order!: Order;
//   constructor(
//     private router: Router,
//     private route: ActivatedRoute,
//     private orderService: OrderService) { }

//   orderType: OrderType[] =[
//     {
//       key: 0,
//       value: 'Fire'
//     },
//     {
//       key: 1,
//       value: 'Water'
//     }
// ]

//   toggleIsCool(event: any) {
//     console.log(event);
//   }

//   log(object: any){
//     console.log(object);
//   }

//   handleSubmit(object: any) {
//     console.log(object);
//   }

//   ngOnInit() {
//     this.order = {} as Order;
//     this.route.params.subscribe((data: Params) => {
//         return this.orderService.getOrder(data['id']).subscribe((data: Order) => {
//           this.order = data;
//       });
//     })
//   }

//   back() : void {
//     this.router.navigate(['/order'])
//   }
// }