import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  // projects that current user is working on (array of projects)
  public projects: Project[] = [];

  public loading: boolean = true;

  public user = JSON.parse(localStorage.getItem('user'));
  
  public getProjects(): void {
    // assign this.projects asynchronously
    this.projectService.getProjects().subscribe(projects => {
      console.log(projects);
      this.loading = false;
      setTimeout(() => {
        this.projects = projects;
      }, 100);
      
    });
  }

  protected goToAddProjectPage() {
    this.router.navigate(['/projects/add'])
  }

  protected deleteProject(project) {
    this.projectService.deleteProject(project).subscribe(response => {
      this.projects.splice(this.projects.findIndex( e => {return e.id == project.id;}), 1);
    });
  }

  // Add a private projectService parameter of type ProjectService to the constructor.
  // When Angular creates a ProjectComponent, the Dependency Injection system sets the projectService parameter to the singleton instance of ProjectService.
  constructor(private router: Router, private projectService: ProjectService) { }

  ngOnInit() {
    this.getProjects();
  }

}
