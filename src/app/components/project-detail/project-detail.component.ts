import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../models/project';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProjectService } from '../../services/project/project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  // The project property must be an Input property, annotated with the @Input() decorator to be able to bind to it
  @Input() public project: Project;

  public loading: boolean = true;

  public getProject(): void {
    // The route.snapshot is a static image of the route information shortly after the component was created.
    // The paramMap is a dictionary of route parameter values extracted from the URL.
    // The "name" key returns the name of the project to fetch.
    // use "+" if the param should be a number (like id) to convert it to number (params are always strings by default).
    const name = this.route.snapshot.paramMap.get('name');
    this.projectService.getProject(name).subscribe(project => {
      this.loading = false;
      setTimeout(() => {
        this.project = project
      }, 100);  
      
    });
  }

  // The ActivatedRoute holds information about the route to this instance of the ProjectDetailComponent.
  // This component is interested in the route's bag of parameters extracted from the URL
  constructor(private route: ActivatedRoute, private location: Location, private projectService: ProjectService) { }

  ngOnInit() {
    this.getProject();
  }

}