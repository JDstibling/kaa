import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from "../../services/auth.service";

// new version
// import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms'
// import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
// import { from } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  })

  // loginForm = this.fb.group({
  //   email: ['', [Validators.required, Validators.email]],
  //   password: ['', Validators.required],
  // });
  // descriptionForm!: FormGroup;

  constructor(
    public authService: AuthService,
    private router: Router,
    private toast: HotToastService,
    ) { }


  ngOnInit(): void {
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  submit() {
    const { email, password } = this.loginForm.value;

    if (!this.loginForm.valid || !email || !password) {
      return;
    }

    this.authService
      .login(email, password)
      .pipe(
        this.toast.observe({
          success: 'Connecté',
          loading: 'Connexion en cours ...',
          error: ({ message }) => `Erreur de connexion ${message} `,
        })
      )
      .subscribe(() => {
        this.router.navigate(['/home']);
      });
  }

}
