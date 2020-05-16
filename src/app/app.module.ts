import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './components/user/user.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { SignupComponent } from './components/signup/signup.component';
import { SharedModule } from '../app/modules/shared/shared.module';
import { httpInterceptorsProvider } from './interceptors/index';
import { MatIconModule } from '@angular/material/icon';
import { ProjectAddComponent } from './components/project-add/project-add.component';
import { FindProjectsComponent } from './components/find-projects/find-projects.component';
import { AssignedProjectsComponent } from './components/assigned-projects/assigned-projects.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { TechnologyAddComponent } from './components/technology-add/technology-add.component';
import { TechnologyDetailComponent } from './components/technology-detail/technology-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    ProjectsComponent,
    ProjectDetailComponent,
    SignupComponent,
    ProjectAddComponent,
    FindProjectsComponent,
    AssignedProjectsComponent,
    TechnologiesComponent,
    TechnologyAddComponent,
    TechnologyDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    SharedModule
  ],
  providers: [
    httpInterceptorsProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
