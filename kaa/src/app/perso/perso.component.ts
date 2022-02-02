import { Component, OnInit } from '@angular/core';

import { CitationService } from '../services/citation.service';

@Component({
  selector: 'app-perso',
  templateUrl: './perso.component.html',
  styleUrls: ['./perso.component.scss']
})
export class PersoComponent implements OnInit {

  constructor(private _CitationService: CitationService) { }

  public citations: any = [];
  public casting: any = [];
  
  ngOnInit(): void {
    this.citations = this._CitationService.getCitations();
    console.log(this.citations);
    this.casting = this._CitationService.getCasting();
    console.log(this.casting);
    
  }

  
}
  