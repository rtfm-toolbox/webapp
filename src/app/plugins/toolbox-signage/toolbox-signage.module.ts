import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolboxSignageModuleRouting } from './toolbox-signage.routing';
import { SignageDashboardComponent } from './components/signage-dashboard/signage-dashboard.component';
import { MenuService } from 'src/app/services/menu.service';



@NgModule({
  declarations: [
    SignageDashboardComponent
  ],
  imports: [
    CommonModule,
    ToolboxSignageModuleRouting
  ]
})
export class ToolboxSignageModule {
  constructor(private menuService: MenuService) {

    this.menuService.register({
      text: "Displays",
      order: 1,
      path: "signage/dashboard",
      children: [
        {
          text: "Übersicht",
          order: 1,
          path: "signage/dashboard",
          children: []
        },{
          text: "Monitor anlegen",
          order: 1,
          path: "signage/edit",
          children: []
        },
      ]
    });
  }
}
