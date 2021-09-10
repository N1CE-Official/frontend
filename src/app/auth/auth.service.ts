import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { User } from '../shared/classes/models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
  loggedUser!: User;

  // store the URL so we can redirect after logging in
  redirectUrl: string | null = null;

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(() => {
        this.isLoggedIn = true;
        this.loggedUser = {
          id: 'Test User',
          name: 'Test User',
          picture: 'https://www.w3schools.com/howto/img_avatar.png'
        };
      })
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
