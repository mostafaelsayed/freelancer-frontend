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

  public assignedProjects = [];

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

  public inAssignedProjects(projectId) {
    return this.assignedProjects.findIndex((e) => {
      return e.projectId == projectId;
    }) !== -1;
  }

  public getAssignedProjects() {
    this.projectService.getAssignedProjects().subscribe(res => {
      this.assignedProjects = res.assignedProjects;
      console.log(res);
    });
  }

  public assignProject(project) {
    this.projectService.assignProject(project).subscribe(res => {
      console.log('response assign project : ', res);
      this.assignedProjects.push({
        projectId: project.id,
        userId: project.userId,
      })
    })
  }

  public unAssignProject(project) {
    this.projectService.unAssignProject(project).subscribe(res => {
      console.log('response unAssign project : ', res);

      let projectIndex = this.assignedProjects.findIndex((e) => {
        return e.projectId == project.id;
      });

      this.assignedProjects.splice(projectIndex, 1);
    })
  }

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.findProjects();
    this.getAssignedProjects();
  }

}
