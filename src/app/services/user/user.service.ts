import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private apiUrl = environment.apiUrl;

  public specifyRoleWhenLogin(role): Observable<any> {
    return this.http.post(this.apiUrl + '/api/changeRole', {role});
  }
  constructor(private http: HttpClient) { }
}
