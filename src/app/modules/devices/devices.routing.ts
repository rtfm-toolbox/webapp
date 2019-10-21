import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DevicesComponent } from './components/devices/devices.component';
import { DeviceComponent } from './components/device/device.component';

const routes: Routes = [
    {
        path: '',
        component: DevicesComponent
    },
    {
        path: 'details/:id',
        component: DeviceComponent
    }
];

export const DevicesModuleRouting: ModuleWithProviders = RouterModule.forChild(routes);