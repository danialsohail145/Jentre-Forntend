import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    TopbarComponent,
    SpinnerComponent,
    SideBarComponent,
    FooterComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    TopbarComponent,
    SpinnerComponent,
    SideBarComponent,
    FooterComponent,
  ],
})
export class SharedModule {}
