import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitationsComponent } from './citations/citations.component';
import { FicheComponent } from './fiche/fiche.component';
import { HomeComponent } from './home/home.component';
import { PersoComponent } from './perso/perso.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'perso', component: PersoComponent},
  {path: 'perso/:id', component: FicheComponent},
  {path: 'citations', component: CitationsComponent},
  // {path: 'cication/:id', component: FicheComponent},
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: '**', redirectTo:'home'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
