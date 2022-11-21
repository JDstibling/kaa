import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CitationService } from '../services/citation.service';

import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-citation-per-book',
  templateUrl: './citation-per-book.component.html',
  styleUrls: ['./citation-per-book.component.scss']
})
export class CitationPerBookComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,  
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 1100,
    autoplaySpeed: 800,
    autoplayTimeout: 2000,
    autoWidth: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayMouseleaveTimeout: 100,
    responsive: {
      0: {
        items: 1,
      },
      380: {
        items: 2,
      },
      575: {
        items: 3,
      },
      876: {
        items: 6,
      },
      1176: {
        items: 6,
      },
    },
    nav: false,
  };
  
  filterOn: Boolean = false;
  bookId!: number;
  citations: any = [];
  citationPerBook: any= [];
  citationPerBookFiltered: any= [];
  bookSelected!: string;
  characterList: any=[];
  characterListFiltered: any=[];
  character: string = "";


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

    this.showCitationPerBook();
  
    //récupération des citations en fonction du book selectionné
    this.characterListFiltered = this.characterList.filter((a: String)=>a);
    console.log(this.characterListFiltered);
  }

  showCitationPerBook() :void{
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
        if (!this.characterList.includes(element.infos.personnage)){
          this.characterList.push(element.infos.personnage);
        }

      }else if (this.bookId === 3 && element.infos.saison === 'Livre III'){
        this.citationPerBook.push(element);
        this.bookSelected = element.infos.saison;
        if (!this.characterList.includes(element.infos.personnage)){
          this.characterList.push(element.infos.personnage);
        }

      }else if (this.bookId === 4 && element.infos.saison === 'Livre IV'){
        this.citationPerBook.push(element);
        this.bookSelected = element.infos.saison;
        if (!this.characterList.includes(element.infos.personnage)){
          this.characterList.push(element.infos.personnage);
        }

      }else if (this.bookId === 5 && element.infos.saison === 'Livre V'){
        this.citationPerBook.push(element);
        this.bookSelected = element.infos.saison;
        if (!this.characterList.includes(element.infos.personnage)){
          this.characterList.push(element.infos.personnage);
        }

      }else if (this.bookId === 6 && element.infos.saison === 'Livre VI'){
        this.citationPerBook.push(element);
        this.bookSelected = element.infos.saison;
        if (!this.characterList.includes(element.infos.personnage)){
          this.characterList.push(element.infos.personnage);
        }
      }
    });
  }

  showCitationPerCharacter(item: any) {
    this.filterOn = true;
    this.showCitationPerBook();
    this.citationPerBookFiltered = [];
    
    this.character= this.characterListFiltered[item];

    this.citationPerBook.forEach((element: any) => {
      if (element.infos.personnage === this.character){
        console.log(element.infos.personnage + " = " + this.character);
        
        if (!this.citationPerBookFiltered.includes(element)){
          
          this.citationPerBookFiltered.push(element);
          
        }
      }

    });
    console.log(this.citationPerBookFiltered);
    
  }

}
