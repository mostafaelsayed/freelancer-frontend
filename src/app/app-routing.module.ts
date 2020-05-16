import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProjectAddComponent } from './components/project-add/project-add.component';
import { FindProjectsComponent } from './components/find-projects/find-projects.component';
import { AssignedProjectsComponent } from './components/assigned-projects/assigned-projects.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { TechnologyAddComponent } from './components/technology-add/technology-add.component';
import { TechnologyDetailComponent } from './components/technology-detail/technology-detail.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'projects/add', component: ProjectAddComponent},
  {path: 'project/:id', component: ProjectDetailComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'find-projects', component: FindProjectsComponent},
  {path: 'assigned-projects', component: AssignedProjectsComponent},
  {path: 'technologies', component: TechnologiesComponent},
  {path: 'technologies/add', component: TechnologyAddComponent},
  {path: 'technology/:id', component: TechnologyDetailComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  
}
