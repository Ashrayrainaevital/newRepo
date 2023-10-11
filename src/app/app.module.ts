import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import {HttpClientModule}from '@angular/common/http';
import { ViewComponent } from './view/view.component';
import { RouterModule,Routes,Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';



const route:Routes=[
  {path:"", component:AppComponent}
  ,{path:'view', component:ViewComponent}];
@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(route)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
