import { Component, OnInit, ViewEncapsulation, ViewContainerRef } from '@angular/core';
import { User } from '../../models/user';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { OverlayService } from '../../modules/shared/services/overlay/overlay.service';

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

  public apiUrl = environment.apiUrl;

  public login(): void {
    this.overlayService.addOverlayComponent();
    this.http.post<any>(`${this.apiUrl}/login`, this.user).subscribe((res) => {
      console.log(res);
      localStorage.setItem('token', res.token);
      this.location.back();
      this.overlayService.removeOverlayComponent();
    });
  }

  constructor(private http: HttpClient, private location: Location, private overlayService: OverlayService, public viewContainerRef: ViewContainerRef) {
    overlayService.viewContainerRef = viewContainerRef;
  }

  ngOnInit() {
  }

}
