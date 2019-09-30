import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  // projects that current user is working on (array of projects)
  projects: Project[];

  getProjects(): void {
    // assign this.projects asynchronously
    this.projectService.getProjects().subscribe(projects => this.projects = projects);
  }

  // Add a private projectService parameter of type ProjectService to the constructor.
  // When Angular creates a ProjectComponent, the Dependency Injection system sets the projectService parameter to the singleton instance of ProjectService.
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.getProjects();
  }

}
