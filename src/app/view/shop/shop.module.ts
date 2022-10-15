import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { CollectionComponent } from './components/collection/collection.component';
import { ViewProductComponent } from './components/view-product/view-product.component';


@NgModule({
  declarations: [
    CollectionComponent,
    ViewProductComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
