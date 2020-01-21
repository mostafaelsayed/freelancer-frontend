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

  public logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
