import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  OURCOMPANY: string[] = ['About Us', 'Contact Us', 'Shop'];
  GETINTOUCH: string[] = ['(+92) 3096025764', 'contact@jentre.pk'];
  QUICKLINKS: string[] = ['FACEBOOK', 'INSTAGRAM'];
  HELP: string[] = [
    'Shipping & Handling',
    'Return & Exchange',
    'Privacy Policy',
  ];

  FOOTER_JSON = [
    {
      title: 'OUR COMPANY',
      elements: this.OURCOMPANY,
    },
    {
      title: 'GET IN TOUCH',
      elements: this.GETINTOUCH,
    },
    {
      title: 'QUICK LINKS',
      elements: this.QUICKLINKS,
    },
    {
      title: 'HELP',
      elements: this.HELP,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
