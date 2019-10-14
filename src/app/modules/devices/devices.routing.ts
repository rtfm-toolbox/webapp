import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { DevicesComponent } from './components/devices/devices.component';

const routes: Routes = [
    {
        path: '',
        component: DevicesComponent,
    }
];

export const DevicesModuleRouting: ModuleWithProviders = RouterModule.forChild(routes);