import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private apiUrl = environment.apiUrl;

  getProjects(): Observable<any> {
    return this.http.get(this.apiUrl + '/api/getProjects');
  }

  getProjectById(id: number): Observable<any> {
    return this.http.get(this.apiUrl + '/api/getProjectById?projectId=' + id);
  }

  addProject(projectToAdd): Observable<any> {
    return this.http.post(this.apiUrl + '/api/addProject', projectToAdd);
  }
  constructor(private http: HttpClient) { }
}
