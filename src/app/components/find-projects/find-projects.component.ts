import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project/project.service';
import { Project } from '../../models/project';

@Component({
  selector: 'app-find-projects',
  templateUrl: './find-projects.component.html',
  styleUrls: ['./find-projects.component.css']
})
export class FindProjectsComponent implements OnInit {

  public projects: Project[] = [];

  public loading: boolean = true;

  public findProjects() {
    this.projectService.getSpecificProjects().subscribe(projects => {
      console.log('res find projects : ', projects);
      this.loading = false;
      setTimeout(() => {
        this.projects = projects;
      }, 100);
    })
  }

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    //console.log(' projects : ', this.projects);
    this.findProjects();
  }

}
