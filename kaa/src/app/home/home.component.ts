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
  
  homeNav = homeNav;
  
  ngOnInit() {
    this.citations = this._CitationService.getCitations();
    this.getRandomCitation();
  }

  getRandomCitation() {
    const numRandom = Math.floor(Math.random() * this.citations.length);
    this.randomCitation = this.citations[numRandom].citation;
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
