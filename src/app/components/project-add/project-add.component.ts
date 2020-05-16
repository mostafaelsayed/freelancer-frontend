import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project/project.service';
import { TechnologyService } from '../../services/technology/technology.service';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent implements OnInit {

  constructor(private projectService: ProjectService, private technologyService: TechnologyService) { }

  ngOnInit() {
    this.getTechnologies();
    console.log(this.periodYears);
  }

  protected technologies = [];
  protected projectToAdd: Project = {
    name: '',
    description: '',
    id: null,
    technologies: [],
    period: ['0', '0', '0']
  };

  protected periodYears = Array.from(Array(21).keys());
  protected periodMonths = Array.from(Array(12).keys());
  protected periodDays = Array.from(Array(30).keys());

  public getTechnologies() {
    this.technologyService.getTechnologies().subscribe(res => {
      console.log('result get technologies : ', res);
      this.technologies = res.technologies;
    });
  }

  public changeTechnologies(e) {
    console.log('changeTechnologies event : ', e);
    //console.log('changeTechnologies selected : ', Array.from(e.target.selectedOptions).map((e: any) => {return e.value;}));
    this.projectToAdd.technologies = Array.from(e.target.selectedOptions).map((e: any) => {return e.value;});
  }

  public changePeriodYears(e) {
    console.log('changePeriodYears event : ', e);
    //console.log('changeTechnologies selected : ', Array.from(e.target.selectedOptions).map((e: any) => {return e.value;}));
    this.projectToAdd.period[0] = e.target.value;
  }

  public changePeriodMonths(e) {
    console.log('changePeriodMonths event : ', e);
    //console.log('changeTechnologies selected : ', Array.from(e.target.selectedOptions).map((e: any) => {return e.value;}));
    this.projectToAdd.period[1] = e.target.value;
  }

  public changePeriodDays(e) {
    console.log('changePeriodDays event : ', e);
    //console.log('changeTechnologies selected : ', Array.from(e.target.selectedOptions).map((e: any) => {return e.value;}));
    this.projectToAdd.period[2] = e.target.value;
  }

  protected addProject() {
    //const projectToAdd = new Project(this.projectName, this.projectDescription, this.projectId, this.selectedTechnologies, [this.selectedYearsNumber, this.selectedMonthsNumber, this.selectedDaysNumber]);
    this.projectService.addProject(this.projectToAdd).subscribe((success) => {
      console.log('success add project : ', success);
    });
  }

}
