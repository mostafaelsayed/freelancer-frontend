import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public email: string = '';
  public password: string = '';
  public confirmPassword: string = '';
  public apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  public register(): void {
    this.http.post<any>(this.apiUrl + '/api/signup', { email: this.email, password: this.password, confirmPassword: this.confirmPassword }).subscribe(response => {
      if (response.token) {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/projects']);
      }
      else {
        alert('error occured please try again');
      };
    });
  }

}
