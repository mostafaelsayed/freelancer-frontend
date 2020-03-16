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
    this.getTechnologies();
  }

  protected projectName: string = '';
  protected projectDescription: string = '';
  protected projectId: number = null;
  public technologies = [];
  public selectedTechnologies = [];

  public getTechnologies() {
    this.projectService.getTechnologies().subscribe(res => {
      console.log('result get technologies : ', res);
      this.technologies = res.technologies;
    });
  }

  public changeTechnologies(e) {
    console.log('changeTechnologies event : ', e);
    //console.log('changeTechnologies selected : ', Array.from(e.target.selectedOptions).map((e: any) => {return e.value;}));
    this.selectedTechnologies = Array.from(e.target.selectedOptions).map((e: any) => {return e.value;});
  }

  protected addProject() {
    const projectToAdd = new Project(this.projectName, this.projectDescription, this.projectId, this.selectedTechnologies);
    this.projectService.addProject(projectToAdd).subscribe((success) => {
      console.log('success add project : ', success);
    });
  }

}
