import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // logged in user object
  user: User = {
    email: '',
    password: ''
  };

  apiUrl = environment.apiUrl;

  login(): void {
    this.http.post(`${this.apiUrl}/api/login`, this.user).subscribe((res) => {
      console.log(res);
    });
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

}
