import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartVisitorsComponent } from './components/chart-visitors/chart-visitors.component';



@NgModule({
  declarations: [
    ChartVisitorsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChartVisitorsComponent
  ]
})
export class CommonComponentsModule { }
