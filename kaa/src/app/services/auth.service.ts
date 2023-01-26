import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

import {
  Auth,
  signInWithEmailAndPassword,
  authState,
  createUserWithEmailAndPassword,
  updateProfile,
  UserInfo,
  UserCredential,
  GoogleAuthProvider,
} from '@angular/fire/auth';
import { from, Observable} from 'rxjs';
import { HotToastService } from '@ngneat/hot-toast';
import firebase from 'firebase/compat';


@Injectable({
  providedIn: 'root',
})
export class AuthService {


  

  userData: any; // Save logged in user data

  constructor(
    private toast: HotToastService,
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone, // NgZone service to remove outside scope warning,
    private auth: Auth,                                                          // de la new version

  ) {
    // /* Saving user data in localstorage when 
    // logged in and setting up null when logged out */
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
        //console.log(this.userData._delegate.auth.currentUser);
        
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  // new method-------------------------------------------------------------------------------------------------

  currentUser$ = authState(this.auth);
  signUp(email: string, password: string): Observable<UserCredential> {
    return from(createUserWithEmailAndPassword(this.auth, email, password));
  }

  login(email: string, password: string): Observable<any> {
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }

  logout(): Observable<any> {
    return from(this.auth.signOut());
  }

  // Reset Forggot password
  ForgotPassword(passwordResetEmail: string) {
    return this.afAuth
    .sendPasswordResetEmail(passwordResetEmail)

    .then(() => {
      this.toast.success('Email envoyé, consultez votre boite ;)');
    })
    .catch(() => {
      this.toast.error('Adresse mail lié à aucun compte !');
      });
  }

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider());
  }

  AuthLogin(provider: firebase.auth.AuthProvider | GoogleAuthProvider) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.toast.success('Connexion à votre compte Google réussi !');
        this.router.navigate(['/home']);
      })
      .catch((error) => {
        this.toast.error('Connexion échoué! Erreur : ' + error);
      });
  }


}