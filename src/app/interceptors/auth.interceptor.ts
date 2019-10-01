import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()


export class AuthInterceptor implements HttpInterceptor {
    constructor(private router: Router) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(localStorage.getItem('token'));
        if (localStorage.getItem('token')) {
            console.log('token in local storage : ', localStorage.getItem('token'));
            req = req.clone({
                setHeaders: {
                    authorization: localStorage.getItem('token')
                }
            })
        }
        else {
            this.router.navigate(['/login']);
        }

        return next.handle(req).pipe(catchError(err => {
            console.log('error catched : ', err);
            this.router.navigate(['/login']);
            return throwError(err);
        }));
    }
}