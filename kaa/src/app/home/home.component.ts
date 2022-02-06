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

  redir(i:any) {
    console.log(i);
    if (i === 0){
      this.Router.navigate(['/perso'])
    }else if (i === 1){
      console.log('citation');
    }else if (i === 2){
     console.log('réunion');
    }else if (i === 3){
      console.log('concours');
      
    }
    
  }

  


}
