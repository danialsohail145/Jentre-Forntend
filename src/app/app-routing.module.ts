import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '"/"',
    loadChildren: () =>
      import('./view/main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'shop',
    loadChildren: () =>
      import('./view/shop/shop.module').then((m) => m.ShopModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      scrollOffset: [0, 0],
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
