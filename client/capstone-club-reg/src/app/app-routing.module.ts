import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';
import { AddGroupComponent } from './add-group/add-group.component';
import { BoyRegComponent } from './boy-reg/boy-reg.component';
import { CoachComponent } from './coach/coach.component';
import { GirlRegComponent } from './girl-reg/girl-reg.component';
import { HomeComponent } from './home/home.component';
import { MixedRegComponent } from './mixed-reg/mixed-reg.component';
import { ViewAllComponent } from './view-all/view-all.component';

// const fallbackRoute: Route = {
//   path: '**', component: HomeComponent
// }

const routes: Routes = [ 
  {
    path: '',
    children: [
      {path: '', component: HomeComponent},
      {path: 'home', component: HomeComponent},
      {path: 'view-all-activities', component: ViewAllComponent},
      {path: 'boys', component: BoyRegComponent},
      {path: 'girls', component: GirlRegComponent},
      {path: 'mixed', component: MixedRegComponent},
      {path: 'coach', component: CoachComponent},
      {path: 'coach/addGroup', component: AddGroupComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
