import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitationPerBookComponent } from './citation-per-book/citation-per-book.component';
import { CitationsComponent } from './citations/citations.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { FicheComponent } from './fiche/fiche.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PersoComponent } from './perso/perso.component';
import { QuizComponent } from './quiz/quiz.component';

// route guard
//import { AuthGuard } from './guard/auth.guard';   voir a supp
import {
  canActivate,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';

const redirectToLogin = () => redirectUnauthorizedTo(['login']);
const redirectToHome = () => redirectLoggedInTo(['login']);

// const routes: Routes = [
//   {path: 'home', component: HomeComponent, ...canActivate(redirectToLogin)},
//   {path: 'quiz', component: QuizComponent, ...canActivate(redirectToLogin)},
//   {path: 'perso', component: PersoComponent, ...canActivate(redirectToLogin)},
//   {path: 'perso/:id', component: FicheComponent, ...canActivate(redirectToLogin)},
//   {path: 'citations', component: CitationsComponent, ...canActivate(redirectToLogin)},
//   {path: 'citations/:id', component: CitationPerBookComponent, ...canActivate(redirectToLogin)},
//   {path: 'notFound', component: NotfoundComponent},

//   {path: '', redirectTo: '/sign-in', pathMatch: 'full' },
//   {path: 'sign-in', component: SignInComponent , ...canActivate(redirectToHome)},
//   {path: 'register-user', component: SignUpComponent, ...canActivate(redirectToHome)},
//   {path: 'dashboard', component: DashboardComponent, ...canActivate(redirectToHome) },
//   {path: 'forgot-password', component: ForgotPasswordComponent },
//   {path: 'verify-email-address', component: VerifyEmailComponent },


//    //{path: '', redirectTo:'home', pathMatch:'full', ...canActivate(redirectToHome)},
//    //{path: '**', redirectTo:'notFound'},
// ];

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: SignInComponent,
    ...canActivate(redirectToHome),
  },
  {
    path: 'register-user',
    component: SignUpComponent,
    ...canActivate(redirectToHome),
  },
  {
    path: 'home',
    component: HomeComponent,
    ...canActivate(redirectToLogin),
  },
  {
    path: 'profile',
    component: DashboardComponent,
    ...canActivate(redirectToLogin),
  },
  {
    path: 'quiz',
    component: QuizComponent,
    ...canActivate(redirectToLogin),
  },
  {
    path: 'perso',
    component: PersoComponent,
    ...canActivate(redirectToLogin),
  },
  {
    path: 'perso/:id',
    component: FicheComponent,
    ...canActivate(redirectToLogin),
  },
  {
    path: 'citations',
    component: CitationsComponent,
    ...canActivate(redirectToLogin),
  },
  {
    path: 'citations/:id',
    component: CitationPerBookComponent,
    ...canActivate(redirectToLogin),
  },
  {
    path: 'profile',
    component: DashboardComponent,
    ...canActivate(redirectToLogin),
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },
  {
    path: 'notFound',
    component: NotfoundComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo:'notFound'
  },
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
