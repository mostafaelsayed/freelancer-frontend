import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'freelancing';

  constructor(private router: Router) {}

  public tokenExisted() {
    return localStorage.getItem('token') !== null;
  }

  public userIsFreelancer() {
    return JSON.parse(localStorage.getItem('user')).role == 'freelancer';
  }

  public userIsAdmin() {
    return JSON.parse(localStorage.getItem('user')).role == 'admin';
  }

  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
