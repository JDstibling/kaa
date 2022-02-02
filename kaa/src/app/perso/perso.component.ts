import { Component, OnInit } from '@angular/core';

import { CitationService } from '../services/citation.service';

@Component({
  selector: 'app-perso',
  templateUrl: './perso.component.html',
  styleUrls: ['./perso.component.scss']
})
export class PersoComponent implements OnInit {

  constructor(public CitationService: CitationService) { }

  ngOnInit(): void {
    this.CitationService.get();
    //console.log('etst');
    
  }
}
  