import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { UserService } from './user.service'
import { UserComponent } from './user/user.component';
import { HttpClientModule} from '@angular/common/http';
import { PolicyserviceService } from './serice-policy.service';


const appRoutes:Routes = [
  {
    path:'users',
    component: UserComponent
  
  },
  {
    path: '' ,
    component: LoginFormComponent
  }, 
  {
    path: 'dashboard',
  
    component: DashboardComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent, 
    DashboardComponent,
    UserComponent
    ],

  imports: [
  RouterModule.forRoot(appRoutes),
  BrowserModule,
  HttpClientModule,
  FormsModule
  ],
  providers: [UserService,PolicyserviceService],
  bootstrap: [AppComponent]
})

export class AppModule { }