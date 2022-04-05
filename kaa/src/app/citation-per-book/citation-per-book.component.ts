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
  citationPerBook: any= [];
  bookSelected!: string;
  characterList: any=[];
  character: string = "Arthur";


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
      if (this.bookId === 1 && element.infos.saison === 'Livre I'){
        this.bookSelected = element.infos.saison;
        this.citationPerBook.push(element);
        if (!this.characterList.includes(element.infos.personnage)){
          this.characterList.push(element.infos.personnage);
        }
      }else if (this.bookId === 2 && element.infos.saison === 'Livre II'){
        this.citationPerBook.push(element);
        this.bookSelected = element.infos.saison;
        this.characterList.push(element.infos.personnage);
      }else if (this.bookId === 3 && element.infos.saison === 'Livre III' && element.infos.personnage === this.character){
        this.citationPerBook.push(element);
        this.bookSelected = element.infos.saison;
        this.characterList.push(element.infos.personnage);
      }else if (this.bookId === 4 && element.infos.saison === 'Livre IV' && element.infos.personnage === this.character){
        this.citationPerBook.push(element);
        this.bookSelected = element.infos.saison;
        this.characterList.push(element.infos.personnage);
      }else if (this.bookId === 5 && element.infos.saison === 'Livre V' && element.infos.personnage === this.character){
        this.citationPerBook.push(element);
        this.bookSelected = element.infos.saison;
        this.characterList.push(element.infos.personnage);
      }else if (this.bookId === 6 && element.infos.saison === 'Livre VI' && element.infos.personnage === this.character){
        this.citationPerBook.push(element);
        this.bookSelected = element.infos.saison;
        this.characterList.push(element.infos.personnage);
      }
    });
    //récupération des citations en fonction du book selectionné
    console.log(this.citationPerBook);
    console.log(this.characterList);
    
  }

}
