import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private apiUrl = environment.apiUrl;

  getProjects(): Observable<any> {
    return this.http.get(this.apiUrl + '/api/getProjects');
  }

  getProject(name): Observable<any> {
    //return this.http.get('/api/getProjects');
    return;
  }
  constructor(private http: HttpClient) { }
}
