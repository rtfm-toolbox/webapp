import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { StatisticsComponent } from './components/statistics/statistics.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'statistics',
        pathMatch: 'full',
    },
    {
        path: 'statistics',
        component: StatisticsComponent
    }
];

export const SpaceControlModuleRouting: ModuleWithProviders = RouterModule.forChild(routes);