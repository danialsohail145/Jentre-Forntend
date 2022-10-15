import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  @Input() isActive: boolean = false;
  @Output() notActive = new EventEmitter<boolean>();
  SIDEMENU_LINK = [
    {
      name: 'HOME',
      route: '/',
    },
    {
      name: 'COLLECTION',
      route: '/shop/collection',
    },
    {
      name: 'SHOP',
      route: 'shop/viewProduct',
    },
    {
      name: 'INFO',
      route: '"shop/collection"',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  changeActiveStatus() {
    // this.isActive = !this.isActive;
    this.notActive.emit(false);
  }
}
