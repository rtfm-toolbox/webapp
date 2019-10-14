import { Injectable } from '@angular/core';
import { MenuItem } from '../classes/menu-item';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menu: MenuItem[] = [];
  menuObservable: BehaviorSubject<MenuItem[]> = new BehaviorSubject<MenuItem[]>(null);

  constructor() {
    this.menu = environment.menu.default.map((m:any) => {
      return {
        text: m.text, 
        order: m.order, 
        path: m.path, 
        children: m.children ? m.children : [] };
      });
  }

  register (item: MenuItem) {

    for(let i = 0; i < this.menu.length; i++) {
      if (this.menu[i].path == item.path) {
        return;
      }
    }

    console.log(item);

    this.menu.push(item);
    this.menuObservable.next(this.menu);

    console.log("menu registered", this.menu);
  }
}
