import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './components/user/user.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { SignupComponent } from './components/signup/signup.component';
import { SharedModule } from '../app/shared/shared.module';
import { httpInterceptorsProvider } from './interceptors/index';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    ProjectsComponent,
    ProjectDetailComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [
    httpInterceptorsProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
