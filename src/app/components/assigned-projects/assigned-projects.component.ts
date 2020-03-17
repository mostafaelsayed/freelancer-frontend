import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project/project.service';

@Component({
  selector: 'app-assigned-projects',
  templateUrl: './assigned-projects.component.html',
  styleUrls: ['./assigned-projects.component.css']
})
export class AssignedProjectsComponent implements OnInit {

  public assignedProjects = [];

  public loading: boolean = true;

  public getAssignedProjects() {
    this.projectService.getAssignedProjects().subscribe(res => {
      this.assignedProjects = res.assignedProjects;
      this.loading = false;
      console.log(res);
    });
  }
  

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.getAssignedProjects();
  }

}
