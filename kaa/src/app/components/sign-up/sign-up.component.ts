import { Component, OnInit } from '@angular/core';
import { getAuth, updateProfile } from 'firebase/auth';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';
import firebase from 'firebase/compat/app';


export function passwordsMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    
    if (password && confirmPassword && password !== confirmPassword) {
      return { passwordsDontMatch: true };
    } else {
      return null;
    }
  };
}


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  
  fb = new FormBuilder();

  signUpForm = this.fb.group(
    {
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    },
    { validators: passwordsMatchValidator() }
  );

  constructor(
    public authService: AuthService, 
    public usersService: UsersService,
    private toast: HotToastService,
    private router: Router,
  ) { }
  
  ngOnInit() { }

  get name() {
    return this.signUpForm.get('name');
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }

  submit() {
    const { name, email, password } = this.signUpForm.value;

    if (!this.signUpForm.valid || !name || !password || !email) {
      return;
    }

    this.authService
      .signUp(email, password)
      .pipe(
        switchMap(({ user: { uid } }) =>
          this.usersService.addUser({ uid, email, displayName: name }) 
        ),
        this.toast.observe({
          success: 'Félicitation! Vous êtes inscrit!',
          loading: 'Enregistrement en cours ..',
          error: ({ message }) => `${message}`,
        })
      )
      
      .subscribe(() => {
        this.router.navigate(['/home']);
        let user = firebase.auth().currentUser;
          if (user) {
            user.updateProfile({
              displayName: name,
              photoURL: 'photoURL'
            });
        }
      }
      )}

  // registerPasswordUser(){

  //   const { name, email, password } = this.signUpForm.value;

  //   if (!this.signUpForm.valid || !name || !password || !email) {
  //     return;
  //   }
  //    let user: { sendEmailVerification: () => void; updateProfile: (arg0: { displayName: string; photoURL: string; }) => void; } | null = null;
  //   //nullify empty arguments
  //   for (var i = 0; i < arguments.length; i++) {
  //     arguments[i] = arguments[i] ? arguments[i] : null;
  //   }
  
  //   firebase.auth().createUserWithEmailAndPassword(email, password)
  //   .then(function () {
  //     user = firebase.auth().currentUser;
  //     if (user) {
  //       user.sendEmailVerification();
  //   }
  //   })
  //   .then(function () {
  //     if (user) {
  //       user.updateProfile({
  //         displayName: name,
  //         photoURL: 'photoURL'
  //       });
  //   }
  //   })
  //   .catch(function(error) {
  //     console.log(error.message);
  //   });
  //   console.log('Validation link was sent to ' + email + '.');
  // }
  
}