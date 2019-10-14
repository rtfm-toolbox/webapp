import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevicesComponent } from './components/devices/devices.component';
import { DevicesModuleRouting } from './devices.routing';
import { MenuService } from 'src/app/services/menu.service';


@NgModule({
  declarations: [
    DevicesComponent
  ],
  imports: [
    CommonModule,
    DevicesModuleRouting
  ]
})
export class DevicesModule {
  
}
