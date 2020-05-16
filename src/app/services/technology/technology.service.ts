import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Technology } from 'src/app/models/technology';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {

  private apiUrl = environment.apiUrl;

  getTechnologies(): Observable<any> {
    return this.http.get(this.apiUrl + '/api/getTechnologies');
  }

  addTechnology(technologyData): Observable<any> {
    return this.http.post(this.apiUrl + '/api/addTechnology', technologyData);
  }

  getTechnologyById(id: number): Observable<any> {
    return this.http.get(this.apiUrl + '/api/getTechnologyById/' + id);
  }

  editTechnology(technology: Technology) {
    return this.http.put(this.apiUrl + '/api/editTechnology', technology);
  }

  deleteTechnology(id: number) {
    return this.http.delete(this.apiUrl + '/api/deleteTechnology/' + id);
  }

  constructor(private http: HttpClient) { }
}
