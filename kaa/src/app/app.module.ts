import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
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

import { NgxPaginationModule } from 'ngx-pagination';
import { FicheComponent } from './fiche/fiche.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { CitationsComponent } from './citations/citations.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersoComponent,
    NavbarComponent,
    FicheComponent,
    CitationsComponent,
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
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
