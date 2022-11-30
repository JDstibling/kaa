import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitationPerBookComponent } from './citation-per-book/citation-per-book.component';
import { CitationsComponent } from './citations/citations.component';
import { FicheComponent } from './fiche/fiche.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PersoComponent } from './perso/perso.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'perso', component: PersoComponent},
  {path: 'perso/:id', component: FicheComponent},
  {path: 'citations', component: CitationsComponent},
  {path: 'citations/:id', component: CitationPerBookComponent},
  {path: 'notFound', component: NotfoundComponent},
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: '**', redirectTo:'notFound'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
