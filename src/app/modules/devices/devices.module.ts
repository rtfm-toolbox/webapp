import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevicesComponent } from './components/devices/devices.component';
import { DevicesModuleRouting } from './devices.routing';
import { MenuService } from 'src/app/services/menu.service';
import { ClarityModule } from '@clr/angular';
import { DeviceComponent } from './components/device/device.component';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Device } from 'src/app/models/device';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CommonComponentsModule } from '../common-components/common-components.module';


@NgModule({
  declarations: [
    DevicesComponent,
    DeviceComponent
  ],
  imports: [
    CommonModule,
    DevicesModuleRouting,
    CommonComponentsModule,
    ClarityModule,
    FormsModule
  ]
})
export class DevicesModule {

  device: Device;
  deviceSubject: BehaviorSubject<Device> = new BehaviorSubject<Device>(null);

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {

    console.log(this.route.snapshot.paramMap);

    this.route.paramMap.subscribe((params: any) => {

      console.log("params:", params);

      this.http.get<Device>(environment.apis.devices.url + "/" + params.id).subscribe(result => {
        console.log(result);
        this.device = result;
        this.deviceSubject.next(this.device);
      })
    });

  }

}
