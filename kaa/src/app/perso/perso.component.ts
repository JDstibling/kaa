import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { CitationService } from '../services/citation.service';

@Component({
  selector: 'app-perso',
  templateUrl: './perso.component.html',
  styleUrls: ['./perso.component.scss']
})
export class PersoComponent implements OnInit {

  @HostListener("window:resize", ["$event"])
  onResize(event: { target: { innerWidth: any; }; }) {
    this.checkWidth(event.target.innerWidth);
  }




  constructor(private _CitationService: CitationService, private Router: Router) { }

  public citations: any = [];
  public casting: any = [];

  totalLength:any;
  page:number = 1;
  maxItems:number = 18;

  
  ngOnInit(): void {
    this.checkWidth(window.innerWidth);
    this.citations = this._CitationService.getCitations();
    //console.log(this.citations);
    
    this.casting = this._CitationService.getCasting();
    //console.log(this.casting);
    this.totalLength = this.casting.length;
    //console.log(this.totalLength);
    
  }

  checkWidth(innerWidth: any) {
    console.log(innerWidth);
    if (innerWidth <= 625) {
      this.maxItems = 2;
    }else if (innerWidth > 625 && innerWidth < 900){
      this.maxItems = 4;
    }else if (innerWidth > 900 && innerWidth > 1200){
      this.maxItems = 6;
    }
  }

  onViewFiche(id : number, item:any) {

    // redirection
    this.Router.navigate(['/perso',item.id]);
    console.log(item.id);

    
  }

  
}
  