import { Injectable } from '@angular/core';
import { Project } from './project';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  getProjects(): Observable<Project[]> {
    // mock projects
    let projects: Project[] = [
      {
        "name": "blog",
        "description": "writing a blog"
      },
      {
        "name": "blog1",
        "description": "writing a blog1"
      }
    ];

    // of(projects) returns an Observable<Project[]> that emits a single value, the array of mock projects.
    return of(projects);
  }

  getProject(name): Observable<Project> {
    // mock projects
    let projects: Project[] = [
      {
        "name": "blog",
        "description": "writing a blog"
      },
      {
        "name": "blog1",
        "description": "writing a blog1"
      }
    ];

    return of(projects.find(project => name === project.name));
  }
  constructor() { }
}
