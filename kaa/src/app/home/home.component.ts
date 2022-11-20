import { Component, OnInit } from '@angular/core';
import { homeNav } from '../config/home-nav';

import { CitationService } from '../services/citation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit{

  constructor(private _CitationService: CitationService, private Router: Router) { }

  citations:any = [];
  randomCitation = "";
  filterCitations:any = [];
  
  homeNav = homeNav;
  
  ngOnInit() {
    this.citations = this._CitationService.getCitations();
    this.getRandomCitation();
  }

  getRandomCitation() {
    //trier dans les citations, et supprimer celles qui ont plus de 50 caractères.
    this.citations.forEach((element: { citation: { length: number; id: any; }; }) => {
      
      if (element.citation.length < 50){
        this.filterCitations.push(element.citation)
      }
    });
    const numRandom = Math.floor(Math.random() * this.filterCitations.length);
    this.randomCitation = this.filterCitations[numRandom];
    console.log(this.filterCitations.length);
    
  }

  redir(i:Number): void {
    if (i === 0){
      this.Router.navigate(['/perso'])
    }else if (i === 1){
      this.Router.navigate(['/citations']);
    }else if (i === 2){
    }else if (i === 3){
    }
  }
}
