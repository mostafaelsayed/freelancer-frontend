import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

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

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  public register(): void {
    this.http.post(this.apiUrl + '/signup', { email: this.email, password: this.password, confirmPassword: this.confirmPassword }).subscribe((response) => {

    });
  }

}
