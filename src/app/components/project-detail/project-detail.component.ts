import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../models/project';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../services/project/project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  // The project property must be an Input property, annotated with the @Input() decorator to be able to bind to it
  @Input() public project: Project;

  protected periodYears = Array.from(Array(21).keys());
  protected periodMonths = Array.from(Array(12).keys());
  protected periodDays = Array.from(Array(30).keys());

  public loading: boolean = true;
  public user = JSON.parse(localStorage.getItem('user'));
  public technologies = [];
  public getProject(): void {
    // The route.snapshot is a static image of the route information shortly after the component was created.
    // The paramMap is a dictionary of route parameter values extracted from the URL.
    // The "name" key returns the name of the project to fetch.
    // use "+" if the param should be a number (like id) to convert it to number (params are always strings by default).
    const id = +this.route.snapshot.paramMap.get('id');
    this.projectService.getProjectById(id).subscribe(project => {
      this.loading = false;
      console.log(project);
      setTimeout(() => {
        this.project = project;
      }, 100);  
      
    });
  }

  public changeTechnologies(e) {
    console.log('changeTechnologies event : ', e);
    //console.log('changeTechnologies selected : ', Array.from(e.target.selectedOptions).map((e: any) => {return e.value;}));
    this.project.technologies = Array.from(e.target.selectedOptions).map((e: any) => {return e.value;});
  }

  public changePeriodYears(e) {
    console.log('changePeriodYears event : ', e);
    //console.log('changeTechnologies selected : ', Array.from(e.target.selectedOptions).map((e: any) => {return e.value;}));
    this.project.period[0] = e.target.value;
  }

  public changePeriodMonths(e) {
    console.log('changePeriodMonths event : ', e);
    //console.log('changeTechnologies selected : ', Array.from(e.target.selectedOptions).map((e: any) => {return e.value;}));
    this.project.period[1] = e.target.value;
  }

  public changePeriodDays(e) {
    console.log('changePeriodDays event : ', e);
    //console.log('changeTechnologies selected : ', Array.from(e.target.selectedOptions).map((e: any) => {return e.value;}));
    this.project.period[2] = e.target.value;
  }

  public getTechnologies() {
    this.projectService.getTechnologies().subscribe(res => {
      console.log('result get technologies : ', res);
      this.technologies = res.technologies;
    });
  }

  public editProject() {
    this.projectService.editProject(this.project).subscribe(project => {
      console.log('success edit project response : ', project);
    });
  }

  // The ActivatedRoute holds information about the route to this instance of the ProjectDetailComponent.
  // This component is interested in the route's bag of parameters extracted from the URL
  constructor(private route: ActivatedRoute, private projectService: ProjectService) { }

  ngOnInit() {
    this.getProject();
    this.getTechnologies();
  }

}
