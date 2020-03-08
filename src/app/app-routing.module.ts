import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProjectAddComponent } from './components/project-add/project-add.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'projects/add', component: ProjectAddComponent},
  {path: 'project/:id', component: ProjectDetailComponent},
  {path: 'projects', component: ProjectsComponent},
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  
}
