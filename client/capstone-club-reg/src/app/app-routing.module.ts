import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';

// const fallbackRoute: Route = {
//   path: '**', component: HomeComponent
// }

const routes: Routes = [ 
  {
    path: '',
    children: [
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
