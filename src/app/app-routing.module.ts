import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './components/register/accounts/accounts.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { SignupComponent } from './components/register/signup/signup.component';
import { OrderPlacedComponent } from './components/order-placed/order-placed.component';
import { SellingComponent } from './components/selling/selling.component';


const routes: Routes = [
  {path:'', redirectTo:'products',pathMatch:'full'},
  {path:'accounts', component: AccountsComponent},
  {path:'signup', component: SignupComponent},
  {path:'products', component: ProductsComponent},
  {path:'cart', component: CartComponent},
  {path:'orderplaced' , component: OrderPlacedComponent},
  {path:'selling' , component: SellingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
