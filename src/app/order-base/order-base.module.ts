import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

//Components
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';

//Services
import { OrderService } from '../_services/order.service';
import { RouterModule, Routes } from '@angular/router';
import { OrderFormsComponent } from './order-forms/order-forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighlightTextDirective } from '../_directives/highlight-text.directive';
import { CustomifDirective } from '../_directives/customif.directive';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: OrderListComponent },
      { path: 'form', component: ReactiveFormsComponent },
      { path: ':id', component: OrderFormsComponent }
    ]
  }
];


@NgModule({
  declarations: [
    OrderListComponent,
    OrderDetailComponent,
    OrderFormsComponent,
    ReactiveFormsComponent,
    HighlightTextDirective,
    CustomifDirective
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    OrderListComponent,
    OrderDetailComponent,
    OrderFormsComponent,
    ReactiveFormsComponent,
    RouterModule
  ],
  providers: [
    OrderService
  ],
  bootstrap: [HighlightTextDirective, CustomifDirective]
})
export class OrderBaseModule { }