import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { CitationService } from '../services/citation.service';

@Component({
  selector: 'app-perso',
  templateUrl: './perso.component.html',
  styleUrls: ['./perso.component.scss']
})
export class PersoComponent implements OnInit {

  constructor(private _CitationService: CitationService, private Router: Router) { }

  public citations: any = [];
  public casting: any = [];

  totalLength:any;
  page:number = 1;
  maxItems:number = 18;

  
  ngOnInit(): void {
    this.citations = this._CitationService.getCitations();
    console.log(this.citations);
    
    this.casting = this._CitationService.getCasting();
    console.log(this.casting);
    this.totalLength = this.casting.length;
    console.log(this.totalLength);
    
  }

  onViewFiche(id : number) {
    console.log(id);
    
    this.Router.navigate(['/perso',id]);
  }

  
}
  