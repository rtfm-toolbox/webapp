import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartVisitorsComponent } from './components/chart-visitors/chart-visitors.component';
import { InputDocumentsComponent } from './components/input-documents/input-documents.component';
import { ClarityModule } from '@clr/angular';



@NgModule({
  declarations: [
    ChartVisitorsComponent,
    InputDocumentsComponent
  ],
  imports: [
    CommonModule,
    ClarityModule,
  ],
  exports: [
    ChartVisitorsComponent,
    InputDocumentsComponent
  ]
})
export class CommonComponentsModule { }
