import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemPriceComponent } from './item-price/item-price.component';
import { ItemPriceFluctuationComponent } from './item-price-fluctuation/item-price-fluctuation.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'item-price'},
  { path: 'item-price', component: ItemPriceComponent},
  { path: 'item-price-fluctuation', component: ItemPriceFluctuationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

