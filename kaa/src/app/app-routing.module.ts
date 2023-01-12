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
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'quiz', component: QuizComponent},
  {path: 'perso', component: PersoComponent},
  {path: 'perso/:id', component: FicheComponent},
  {path: 'citations', component: CitationsComponent},
  {path: 'citations/:id', component: CitationPerBookComponent},
  {path: 'notFound', component: NotfoundComponent},

  {path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  {path: 'sign-in', component: SignInComponent },
  {path: 'register-user', component: SignUpComponent },
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  {path: 'forgot-password', component: ForgotPasswordComponent },
  {path: 'verify-email-address', component: VerifyEmailComponent },


  // {path: '', redirectTo:'home', pathMatch:'full'},
  // {path: '**', redirectTo:'notFound'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
