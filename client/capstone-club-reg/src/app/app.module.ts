import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { CoachComponent } from './coach/coach.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewAllComponent } from './view-all/view-all.component';
import { BoyRegComponent } from './boy-reg/boy-reg.component';
import { GirlRegComponent } from './girl-reg/girl-reg.component';
import { MixedRegComponent } from './mixed-reg/mixed-reg.component';
import { AddGroupComponent } from './add-group/add-group.component';
import { ViewListComponent } from './view-list/view-list.component';
import { DeleteGroupComponent } from './delete-group/delete-group.component';
import { EditActivityComponent } from './edit-activity/edit-activity.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    MainComponent,
    CoachComponent,
    HomeComponent,
    ViewAllComponent,
    BoyRegComponent,
    GirlRegComponent,
    MixedRegComponent,
    AddGroupComponent,
    ViewListComponent,
    DeleteGroupComponent,
    EditActivityComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
