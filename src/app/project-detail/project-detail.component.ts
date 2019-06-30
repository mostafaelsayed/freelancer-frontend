import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  // The project property must be an Input property, annotated with the @Input() decorator to be able to bind to it
  @Input() project: Project;

  constructor() { }

  ngOnInit() {
  }

}
