import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { MenuItem } from 'src/app/classes/menu-item';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  menu: MenuItem[] = [];

  currentTopMenu: MenuItem = null;

  selectedMenu: MenuItem = null;

  constructor(
    private router: Router,
    private route:ActivatedRoute,
    private menuService: MenuService) { }

  ngOnInit() {
    this.menu = this.menuService.menu;
    this.menuService.menuObservable.subscribe(m => {
      this.menu;
      this.menu.forEach(m => {
        if (m.active) {
          this.selectedMenu = m;
        }
      })
    });


    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        console.log(e);

        console.log('data: ', this.route.snapshot);
        // this.menuService.selectByPath(e.url);
      }
    })
  }

  menuClick(item: MenuItem) {
    console.log(item);

    if (item.children.length == 0) {
      this.menuService.navigate(item);
      return;
    }

    this.menuService.navigate(item);
    this.selectedMenu = item;
  }

}
