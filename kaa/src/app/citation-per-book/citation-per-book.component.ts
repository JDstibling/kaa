import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CitationService } from '../services/citation.service';

@Component({
  selector: 'app-citation-per-book',
  templateUrl: './citation-per-book.component.html',
  styleUrls: ['./citation-per-book.component.scss']
})
export class CitationPerBookComponent implements OnInit {

  bookId!: number;
  citations: any = [];
  citation: any= [];

  constructor(private router: ActivatedRoute, private CitationService: CitationService) { }

  ngOnInit(): void {

    //récupération des citations
    this.citations = this.CitationService.getCitations();
    // id du book sélectionné
    this.bookId = +this.router.snapshot.params['id'];
    // filtre des citations en fonction du book
    // définir le nom de chaque livre en fonction de l'id du book sélectionné 
    // donc si id = 1 , alors prendre tous les citations avec 'saison = Livre I' ...
    // donc un truc du genre if (this.bookId == 0 && this.citations.infos.saison === 'Livre I) ... push ...

    this.citations.forEach((element: any) => {
      if (this.bookId === 0 && element.infos.saison === 'Livre VI'){
        this.citation.push(element);
        
      }
    });
    //récupération des citations en fonction du book selectionné
    console.log(this.citation);
    
    
    
  }

}
