import { Component, OnInit } from '@angular/core';
import { homeNav } from '../config/home-nav';

import { CitationService } from '../services/citation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit{

  constructor(private _CitationService: CitationService) { }

  citations:any = [];
  randomCitation = "";
  
  homeNav = homeNav;
  
  ngOnInit() {
    this.citations = this._CitationService.getCitations();
    this.getRandomCitation();
  }

  getRandomCitation() {
    const numRandom = Math.floor(Math.random() * this.citations.length);
    this.randomCitation = this.citations[numRandom].citation;
  }

  


}
