import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project/project.service';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  protected projectName: string = '';
  protected projectDescription: string = '';

  protected addProject() {
    const projectToAdd = new Project(this.projectName, this.projectDescription);
    this.projectService.addProject(projectToAdd).subscribe((success) => {
      console.log('success add project : ', success);
    });
  }

}
