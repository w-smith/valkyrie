import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';



@Injectable()
export class AuthService {
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router) {}

  login(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then(value => {

      console.log("You're doing it, Peter!", value.email);
      this.router.navigateByUrl('/profile');

      console.log('Nice, it worked!', value.uid);
      this.router.navigateByUrl('/' + value.uid + '/profile');

    })
    
    .catch(err => {
      // console.log('Something went wrong: ', err.message);
      alert("Incorrect email or password");
    });
  }





  emailSignup(email: string, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    .then(value => {

     console.log('Success', value.email);
     this.router.navigateByUrl('/profile');

     console.log('Success', value.uid);
     this.router.navigateByUrl('/' + value.uid + '/profile');

    })
    .catch(error => {
      console.log('Something went wrong: ', error);
      alert("Email already in use. Try logging in.")
    });
  }

  logout() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }




  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider);
  }
}