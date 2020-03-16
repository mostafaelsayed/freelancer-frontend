import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { UserService } from '../../services/user/user.service';
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
  public roles =[];
  public freelancerChecked = false;
  public clientChecked = false;
  public localStorageUser;

  constructor(private userService: UserService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  public multiRole = false;
  public loginDisabled = false;

  public register(): void {
    this.http.post<any>(this.apiUrl + '/api/signup', { roles: this.roles, email: this.email, password: this.password, confirmPassword: this.confirmPassword }).subscribe(response => {
      console.log(response);
      if (response.token) {
        // set token in local storage.
        localStorage.setItem('token', response.token);

        // hold the user variable for now.
        this.localStorageUser = response.user;

        // set user info in local storage.
        localStorage.setItem('user', JSON.stringify(response.user));

        if (response.message == 'specify roles') {
          // pop up message to let user choose
          this.multiRole = true;
          this.loginDisabled = true;
        }
        else {
          localStorage.setItem('token', response.token);
          localStorage.setItem('user', response.user);
          //this.router.navigate(['/projects']);
        }
      }
      else {
        alert('error occured please try again');
      };
    });
  }

  public changeRole(e) {
    console.log(e);
    // change role of user variable
    this.localStorageUser.role = e.value;
    // change role in backend locals object of response
    this.userService.specifyRoleWhenLogin(e.value).subscribe( res => {
      if (res.message == 'done choose role') {
        console.log('done choosing role!');
        localStorage.setItem( 'user', JSON.stringify(this.localStorageUser) );
        localStorage.setItem('token', res.token);
        this.router.navigate(['/projects']);
      }
      // if error then reset everything
      else {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
      }
    });
  }

  public checkboxToggle(event) {
    console.log('freelancer/client checkbox clicked : ', event);

    if (event.checked === true) {
      this.roles.push(event.source.name);
    }
    else if (event.checked === false) {
      this.roles.splice(this.roles.indexOf(event.source.name), 1);
    }

    console.log('roles assigned : ', this.roles);
  }

}
