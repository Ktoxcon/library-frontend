import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, pipe, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Router } from '@angular/router';

type Session = {
  authToken: string;
};

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  url: string = `http://localhost:3000/library/v1/signIn`;

  constructor(private http: HttpClient, private router: Router) {}

  signIn(username: string, password: string): void {
    this.http
      .post<any>(this.url, { username, password })
      .subscribe(({ session, role }) => {
        if (session) {
          localStorage.setItem('authToken', session);

          if (Boolean(role)) {
            if (role === 'admin') {
              this.router.navigateByUrl('admin');
            } else if (role === 'student' || 'teacher') {
              this.router.navigateByUrl('user');
            } else {
              this.router.navigateByUrl('');
            }
          }
        }
      });
  }

  logout(): void {
    localStorage.removeItem('authToken');
  }

  isLogged(): Observable<boolean> {
    return new Observable((subscriber) => {
      if (Boolean(localStorage.getItem('authToken'))) {
        subscriber.next(true);
      } else {
        subscriber.next(false);
      }
    });
  }
}
