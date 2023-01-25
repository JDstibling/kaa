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
  randomCitation:any = [];
  filterCitations:any = [];
  
  homeNav = homeNav;
  
  ngOnInit() {
    this.citations = this._CitationService.getCitations();
    this.randomCitation = this._CitationService.getRandomCitation(100, this.citations);
  }

  redir(i:Number): void {
    if (i === 0){
      this.Router.navigate(['/perso'])
    }else if (i === 1){
      this.Router.navigate(['/citations']);
    }else if (i === 2){
      this.Router.navigate(['/quiz']);
    }else if (i === 3){
      this.Router.navigate(['#']);
    }
  }
}

