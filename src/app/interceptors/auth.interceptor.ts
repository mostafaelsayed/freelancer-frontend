import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()


export class AuthInterceptor implements HttpInterceptor {
    constructor(private router: Router) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(localStorage.getItem('token'));
        console.log(req.url);
        
        if (localStorage.getItem('token')) {
            console.log('token in local storage : ', localStorage.getItem('token'));
            req = req.clone({
                withCredentials: true,
                setHeaders: {
                    authorization: localStorage.getItem('token')
                }
            });
        }
        else if (!req.url.includes('api/signup') && !req.url.includes('api/login')) {
            localStorage.removeItem('token');
            console.log('interceptor login redirect');
            this.router.navigate(['/login']);
        }

        return next.handle(req).pipe(catchError(err => {
            console.log('error catched : ', err);

            // if not authenticated response error
            if (err.status === 403) {
                localStorage.removeItem('token');
                this.router.navigate(['/login']);
            }

            return throwError(err);
        }));
    }
}