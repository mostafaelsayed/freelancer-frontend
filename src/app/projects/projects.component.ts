import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  // projects that current user is working on (array of projects)
  public projects: Project[];

  public loading: boolean = true;

  public getProjects(): void {
    // assign this.projects asynchronously
    this.projectService.getProjects().subscribe(projects => {
      console.log(projects);
      this.loading = false;
      setTimeout(() => {
        this.projects = projects.docs;
      }, 100);
      
    });
  }

  // Add a private projectService parameter of type ProjectService to the constructor.
  // When Angular creates a ProjectComponent, the Dependency Injection system sets the projectService parameter to the singleton instance of ProjectService.
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.getProjects();
  }

}
