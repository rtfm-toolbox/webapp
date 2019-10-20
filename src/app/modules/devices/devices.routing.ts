import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DevicesComponent } from './components/devices/devices.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
    },
    {
        path: 'list',
        component: DevicesComponent,
        data: {
            id: 'devices-list',
            toplevel: 'devices'
        }
    }
];

export const DevicesModuleRouting: ModuleWithProviders = RouterModule.forChild(routes);