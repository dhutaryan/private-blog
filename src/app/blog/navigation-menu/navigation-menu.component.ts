import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pb-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
})
export class NavigationMenuComponent implements OnInit {
  isSidebarVisible = false;
  items = [
    {
      title: 'Posts',
      link: '/posts',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
