import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssessmentComponent } from './assessment/assessment.component';
import { QualifyComponent } from './qualify.component';
import { SendComponent } from './send/send.component';

const routes: Routes = [
  {
    path:'', component: QualifyComponent,
    children:[
      {path:'', component:AssessmentComponent},
      {path:'send', component:SendComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QualifyRoutingModule { }
