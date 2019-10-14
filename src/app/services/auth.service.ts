import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  user: User;

  constructor(
    private afAuth: AngularFireAuth,
    private _router: Router
  ) {
    this.afAuth.user.subscribe(u => this.user);
  }

  isAuthenticated(): boolean {
    console.log(this.user);
    return this.user != null;
  }

  login(username: string, password: string) {

    this.afAuth.auth.signInWithEmailAndPassword(username, password)
      .then(() => {
        this._router.navigate(['/']);
      });

    // this.userSubject.next({
    //   Username: username,
    //   Displayname: username,
    //   UserID: "foobar"
    // });

    // this._router.navigate(['/']);

    // return true;
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
