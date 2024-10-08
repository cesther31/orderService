import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch:"full" },
  { path: 'order', loadChildren: () => import('./order-base/order-base.module').then(m => m.OrderBaseModule) },
  { path: '**', component:  NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }