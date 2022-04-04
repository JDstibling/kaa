import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { PersoComponent } from './perso/perso.component';
import { NavbarComponent } from './navbar/navbar.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import { NgxPaginationModule } from 'ngx-pagination';
import { FicheComponent } from './fiche/fiche.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { CitationsComponent } from './citations/citations.component';
import { CitationPerBookComponent } from './citation-per-book/citation-per-book.component';
import { SingleCitationComponent } from './single-citation/single-citation.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersoComponent,
    NavbarComponent,
    FicheComponent,
    CitationsComponent,
    CitationPerBookComponent,
    SingleCitationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HttpClientModule,
    FlexLayoutModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
