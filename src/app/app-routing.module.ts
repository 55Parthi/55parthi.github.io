import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { BuyComponent } from './components/buy/buy.component';

const routes: Routes = [
  {path:'',redirectTo:'products',pathMatch:'full'},
  {path:'products',component:ProductsComponent},
  {path:'cart',component:CartComponent},
  {path:'buy',component:BuyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
