import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { citationByBook } from '../models/citationByBook.model';
import { CitationService } from '../services/citation.service';

@Component({
  selector: 'app-citations',
  templateUrl: './citations.component.html',
  styleUrls: ['./citations.component.scss']
})
export class CitationsComponent implements OnInit {

  citationByBook: citationByBook[] = []
  citation: any = [];
  
  citationLivre1: number = 0;
  citationLivre2: number = 0;
  citationLivre3: number = 0;
  citationLivre4: number = 0;
  citationLivre5: number = 0;
  citationLivre6: number = 0;

  constructor(private citationService: CitationService, private Router: Router) { }

  ngOnInit(): void {
    this.citationByBook = this.citationService.getCitationByBook();
    this.citation = this.citationService.getCitations();

    this.citation.forEach((element: any) => {
      if (element.infos.saison === 'Livre I'){
        this.citationByBook[0].citations++;
      }else if (element.infos.saison === 'Livre II'){
        this.citationByBook[1].citations++;
      }else if (element.infos.saison === 'Livre III'){
        this.citationByBook[2].citations++;
      }else if (element.infos.saison === 'Livre IV'){
        this.citationByBook[3].citations++;
      }else if (element.infos.saison === 'Livre V'){
        this.citationByBook[4].citations++;
      }else if (element.infos.saison === 'Livre VI'){
        this.citationByBook[5].citations++;
      }
    });
  }

  onViewCitationByBook(item: any) :void{
    // redirection
    this.Router.navigate(['citations/', item.id]);
    //console.log(this.Router.navigate(['test/', item.id]));
  }
}
