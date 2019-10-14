import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { MenuItem } from 'src/app/classes/menu-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  menu: MenuItem[] = [];
  selectedMenu: MenuItem = null;

  constructor(
    private router: Router,
    private menuService: MenuService) { }

  ngOnInit() {
    this.menu = this.menuService.menu;
    this.menuService.menuObservable.subscribe(m=> this.menu);
  }

  menuClick(item: MenuItem) {
    console.log(item);

    if (item.children.length == 0) {
      this.router.navigate([item.path]);
      return;
    }

    this.selectedMenu = item;


  }

}
