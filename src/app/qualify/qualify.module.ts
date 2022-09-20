import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QualifyRoutingModule } from './qualify-routing.module';
import { QualifyComponent } from './qualify.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { SendComponent } from './send/send.component';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    QualifyComponent,
    AssessmentComponent,
    SendComponent
  ],
  imports: [
    CommonModule,
    QualifyRoutingModule,

    MatIconModule,
    MatButtonModule
  ]
})
export class QualifyModule { }
