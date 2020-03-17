import { Component, OnInit, ViewEncapsulation, ViewContainerRef } from '@angular/core';
import { User } from '../../models/user';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { OverlayService } from '../../modules/shared/services/overlay/overlay.service';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  // logged in user object
  public user: User = {
    email: '',
    password: ''
  };

  public multiRole = false;
  public loginDisabled = false;
  public apiUrl = environment.apiUrl;
  public localStorageUser;

  public roles = ['freelancer', 'client'];

  public login(): void {
    this.overlayService.addOverlayComponent();
    this.http.post<any>(`${this.apiUrl}/api/login`, this.user).subscribe((res) => {
      console.log(res);
      // set token in local storage.
      localStorage.setItem('token', res.token);

      // hold the user variable for now.
      this.localStorageUser = res.user;

      // set user info in local storage.
      localStorage.setItem('user', JSON.stringify(res.user));

      // if we need to specify role
      if (res.message == 'specify roles') {
        // pop up message to let user choose
        this.multiRole = true;
        this.loginDisabled = true;
      }
      
      // if not then login is done.
      else {
        if (this.localStorageUser.role == 'client') {
          this.router.navigate(['/projects']);
        }
        else if (this.localStorageUser.role == 'freelancer') {
          this.router.navigate(['/assigned-projects']);
        }
      }

      this.overlayService.removeOverlayComponent();
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
        if (this.localStorageUser.role == 'client') {
          this.router.navigate(['/projects']);
        }
        else if (this.localStorageUser.role == 'freelancer') {
          this.router.navigate(['/assigned-projects']);
        }
      }
      // if error then reset everything
      else {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
      }
    });
  }

  constructor(private router: Router, private userService: UserService, private http: HttpClient, private location: Location,
    private overlayService: OverlayService, public viewContainerRef: ViewContainerRef) {
    overlayService.viewContainerRef = viewContainerRef;
  }

  ngOnInit() {
  }

}
