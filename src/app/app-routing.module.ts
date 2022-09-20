import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //{ path: 'assessment', component: AssessmentComponent},
  {
    path: 'qualify',
    loadChildren: ()=>import('./qualify/qualify.module').then(m=>m.QualifyModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
