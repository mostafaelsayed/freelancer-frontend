import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private apiUrl = environment.apiUrl;

  getTechnologies(): Observable<any> {
    return this.http.get(this.apiUrl + '/api/getTechnologies');
  }

  getProjects(): Observable<any> {
    return this.http.get(this.apiUrl + '/api/getProjects');
  }

  getAssignedProjects(): Observable<any> {
    return this.http.get(this.apiUrl + '/api/getAssignedProjects');
  }

  getSpecificProjects(): Observable<any> {
    return this.http.get(this.apiUrl + '/api/getSpecificProjects');
  }

  getProjectById(id: number): Observable<any> {
    return this.http.get(this.apiUrl + '/api/getProjectById?projectId=' + id);
  }

  assignProject(project): Observable<any> {
    return this.http.post(this.apiUrl + '/api/assignProject', project);
  }

  unAssignProject(project): Observable<any> {
    return this.http.post(this.apiUrl + '/api/unAssignProject', project);
  }

  addProject(projectToAdd): Observable<any> {
    return this.http.post(this.apiUrl + '/api/addProject', projectToAdd);
  }

  editProject(projectToEdit): Observable<any> {
    return this.http.post(this.apiUrl + '/api/editProject', projectToEdit);
  }

  deleteProject(projectToDelete): Observable<any> {
    return this.http.post(this.apiUrl + '/api/deleteProject', projectToDelete);
  }

  constructor(private http: HttpClient) { }
}
