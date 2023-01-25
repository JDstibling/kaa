import { Injectable, NgZone } from '@angular/core';
  import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
// import firebaseui from 'firebaseui';
// import firebase from 'firebase/compat';

// new version
import {
  Auth,
  signInWithEmailAndPassword,
  authState,
  createUserWithEmailAndPassword,
  updateProfile,
  UserInfo,
  UserCredential,
} from '@angular/fire/auth';
import { concatMap, from, Observable, of, switchMap } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AuthService {


  

  userData: any; // Save logged in user data

  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone, // NgZone service to remove outside scope warning,
    private auth: Auth                                                           // de la new version
  ) {
    // /* Saving user data in localstorage when 
    // logged in and setting up null when logged out */
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
        console.log(this.userData._delegate.auth.currentUser);
        
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }
  // // Sign in with email/password
  // SignIn(email: string, password: string) {
  //   return this.afAuth
  //     .signInWithEmailAndPassword(email, password)
  //     .then((result) => {
  //       this.SetUserData(result.user);
  //       this.afAuth.authState.subscribe((user) => {
  //         if (user) {
  //           this.router.navigate(['dashboard']);
  //         }
  //       });
  //     })
  //     .catch((error) => {
  //       window.alert(error.message);
  //     });
  //   }
  //   // Sign up with email/password
  //   SignUp(email: string, password: string) {
  //   return this.afAuth
  //     .createUserWithEmailAndPassword(email, password)
  //     .then((result) => {
  //       /* Call the SendVerificaitonMail() function when new user sign 
  //       up and returns promise */
  //       this.SendVerificationMail();
  //       this.SetUserData(result.user);
  //     })
  //     .catch((error) => {
  //       window.alert(error.message);
  //     });
  //   }
  //   // Send email verfificaiton when new user sign up
  // SendVerificationMail() {
  //   return this.afAuth.currentUser
  //   .then((u: any) => u.sendEmailVerification())
  //   .then(() => {
  //     this.router.navigate(['verify-email-address']);
  //   });
  // }
  // // Reset Forggot password
  // ForgotPassword(passwordResetEmail: string) {
  //   return this.afAuth
  //   .sendPasswordResetEmail(passwordResetEmail)
  //   .then(() => {
  //     window.alert('Password reset email sent, check your inbox.');
  //   })
  //   .catch((error) => {
  //     window.alert(error);
  //     });
  //   }
  //   // Returns true when user is looged in and email is verified
  //   get isLoggedIn(): boolean {
  //     const user = JSON.parse(localStorage.getItem('user')!);
  //   return user !== null && user.emailVerified !== false ? true : false;
  // }
  // // Sign in with Google
  // GoogleAuth() {
  //   return this.AuthLogin(new auth.GoogleAuthProvider()).then((res: any) => {
  //     this.router.navigate(['dashboard']);
  //   });
  // }
  // Auth logic to run auth providers
  // AuthLogin(provider: any) {
  //   return this.afAuth
  //   .signInWithPopup(provider)
  //   .then((result) => {
  //     this.router.navigate(['dashboard']);
  //     this.SetUserData(result.user);
  //   })
  //   .catch((error) => {
  //     window.alert(error);
  //   });
  // }
  /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  // SetUserData(user: any) {
  //   const userRef: AngularFirestoreDocument<any> = this.afs.doc(
  //     `users/${user.uid}`
  //     );
  //     const userData: User = {
  //       uid: user.uid,
  //       email: user.email,
  //       displayName: user.displayName,
  //       photoURL: user.photoURL,
  //       emailVerified: user.emailVerified,
  //     };
  //     return userRef.set(userData, {
  //       merge: true,
  //     });
  //   }
  //   // Sign out
  //   async SignOut() {
  //     await this.afAuth.signOut();
  //     localStorage.removeItem('user');
  //     this.router.navigate(['sign-in']);
  // }


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

  // const res = await this.afAuth.createUserWithEmailAndPassword(email, password);
  // const user = this.res.user;

// once we get user object then update user display name using following method
// await this.user.updateProfile({displayName: name})

 
 
//   updateProfile(profileData: Partial<UserInfo>): Observable<any> {
//     const user = this.auth.currentUser;
//     return of(user).pipe(
//       concatMap((user) => {
//         if (!user) throw new Error('Not authenticated');

//         return updateProfile(user, profileData);
//       })
//     );
//   }
  


}