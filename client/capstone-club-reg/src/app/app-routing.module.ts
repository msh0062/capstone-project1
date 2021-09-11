import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';
import { CoachComponent } from './coach/coach.component';
import { HomeComponent } from './home/home.component';
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
      {path: 'boys', component: CoachComponent},
      {path: 'girls', component: CoachComponent},
      {path: 'mixed', component: CoachComponent},
      {path: 'coach', component: CoachComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
