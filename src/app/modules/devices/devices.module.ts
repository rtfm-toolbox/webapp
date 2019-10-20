import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevicesComponent } from './components/devices/devices.component';
import { DevicesModuleRouting } from './devices.routing';
import { MenuService } from 'src/app/services/menu.service';
import { ClarityModule } from '@clr/angular';


@NgModule({
  declarations: [
    DevicesComponent
  ],
  imports: [
    CommonModule,
    DevicesModuleRouting,
    ClarityModule
  ]
})
export class DevicesModule {
  
}
