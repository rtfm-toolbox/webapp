import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { SpaceControlModuleRouting } from './space-control.routing';
import { CommonComponentsModule } from '../common-components/common-components.module';



@NgModule({
  declarations: [StatisticsComponent],
  imports: [
    CommonModule,
    SpaceControlModuleRouting,
    CommonComponentsModule
  ]
})
export class SpaceControlModule { }
