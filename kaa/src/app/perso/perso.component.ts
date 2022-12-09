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
  maxItems:number = 1;

  
  ngOnInit(): void {
    this.checkWidth(window.innerWidth);
    this.citations = this._CitationService.getCitations();
    this.casting = this._CitationService.getCasting();
    this.totalLength = this.casting.length;
  }

  checkWidth(innerWidth: any) {
    if (innerWidth <= 625) {
      this.maxItems = 12;
    }else if (innerWidth > 625 && innerWidth < 900){
      this.maxItems = 12;
    }else if (innerWidth > 900 && innerWidth < 1000){
      this.maxItems = 12;
    }else if (innerWidth > 1000 && innerWidth < 1200){
      this.maxItems = 12;
    }else if (innerWidth > 1200){
      this.maxItems = 18;
    }
  }

  onViewFiche(item:any): void{
    // redirection
    this.Router.navigate(['/perso',item.id]);
  }
}
  