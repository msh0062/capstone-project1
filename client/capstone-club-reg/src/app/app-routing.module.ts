import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';
import { HomeComponent } from './home/home.component';

const fallbackRoute: Route = {
  path: '**', component: HomeComponent
}

const routes: Routes = [ 
  {
    path: '',
    children: [
      {path: 'home',  component: HomeComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
