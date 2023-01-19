import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";

// new version
// import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms'
// import { Router } from '@angular/router';
// import { HotToastService } from '@ngneat/hot-toast';
// import { from } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  // loginForm = this.fb.group({
  //   email: ['', [Validators.required, Validators.email]],
  //   password: ['', Validators.required],
  // });
  // descriptionForm!: FormGroup;

  // constructor(public authService: AuthService) { }

  // constructor(
  //   private authService: AuthService,
  //   private toast: HotToastService,
  //   private router: Router,
  //   private fb: NonNullableFormBuilder,
  // ) {}

  ngOnInit(): void {
    // this.descriptionForm = new FormGroup({
    //   code: new FormControl('')
  }

  // get email() {
  //   return this.loginForm.get('email');
  // }

  // get password() {
  //   return this.loginForm.get('password');
  // }

  // submit() {
  //   const { email, password } = this.loginForm.value;

  //   if (!this.loginForm.valid || !email || !password) {
  //     return;
  //   }

  //   this.authService
  //     .login(email, password)
  //     .pipe(
  //       this.toast.observe({
  //         success: 'Logged in successfully',
  //         loading: 'Logging in...',
  //         error: ({ message }) => `There was an error: ${message} `,
  //       })
  //     )
  //     .subscribe(() => {
  //       this.router.navigate(['/home']);
  //     });
  // }

}
