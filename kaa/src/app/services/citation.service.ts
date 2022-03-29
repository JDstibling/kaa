import { Injectable } from '@angular/core';

import Citations from '../../assets/datas/citations.json';
import Casting from '../../assets/datas/casting.json';
import { citationByBook } from '../models/citationByBook.model';
import { citation } from '../models/citation.model';

@Injectable({
  providedIn: 'root'
})
export class CitationService{

  citationByBook: citationByBook[] = [
    {
      id: 1,
      title: 'Livre I',
      imageUrl: '',
      citations: 0
    },
    {
      id: 2,
      title: 'Livre II',
      imageUrl: '',
      citations: 0
    },
    {
      id: 3,
      title: 'Livre III',
      imageUrl: '',
      citations: 0
    },
    {
      id: 4,
      title: 'Livre IV',
      imageUrl: '',
      citations: 0
    },
    {
      id: 5,
      title: 'Livre V',
      imageUrl: '',
      citations: 0
    },
    {
      id: 6,
      title: 'Livre VI',
      imageUrl: '',
      citations: 0
    },

  ]

  citations : citation[] = [];

  //citationString: string = 'citationLivre';

  // citationLivre: number = 0;
  // citationLivre1: number = 0;
  // citationLivre2: number = 0;
  // citationLivre3: number = 0;
  // citationLivre4: number = 0;
  // citationLivre5: number = 0;
  // citationLivre6: number = 0;

  getCitations() {
     return Citations;
   }

  getCasting() {
    return Casting;
  }

  getCitationByBook() {
    return this.citationByBook;
  }

//   countCitationByBook(book:number) {

//     // for (let i = 0; i < 6; i++){
//     //       Citations.forEach(element => {
//     //         if (element.infos.saison === this.citationByBook[i].title){
//     //           //console.log(this.citationByBook[i].title);
//     //           this.citationString + (i + 1) ; 1;
//     //           console.log(this.citationString + (i +1));
//     //           let bookVar = this.citationString + (i + 1);
//     //           console.log(bookVar);
              
              
//     //           //console.log(this.citationString + (i + 1));
              
//     //         // }else if (element.infos.saison === this.citationByBook[i].title){
//     //         //   this.citationLivreII.push(element.citation);
//     //         // }else if (element.infos.saison === this.citationByBook[i].title){
//     //         //   this.citationLivreIII.push(element.citation);
//     //         // }else if (element.infos.saison === this.citationByBook[i].title){
//     //         //   this.citationLivreIV.push(element.citation);
//     //         // }else if (element.infos.saison === this.citationByBook[i].title){
//     //         //   this.citationLivreV.push(element.citation);
//     //         // }else if (element.infos.saison === this.citationByBook[i].title){
//     //         //   this.citationLivreVI.push(element.citation);
//     //          }
//     // });
//     // }

//     //let myArray1: ({ citation: string; infos: { acteur: string; personnage: string; auteur: string; saison: string; episode: string; }; id: number; } | { citation: string; infos: { auteur: string; acteur: string; personnage: null; saison: string; episode: string; }; id: number; } | { citation: string; infos: { auteur: string; acteur: string; personnage: string; saison: string; episode?: undefined; }; id: number; })[] = [];

//     Citations.forEach(element => {
//       if (element.infos.saison === this.citationByBook[book].title){
//         this.citationLivre++;
//       //  }else if (element.infos.saison === this.citationByBook[1].title){
//       //   this.citationLivre2++;
//       //  }else if (element.infos.saison === this.citationByBook[2].title){
//       //   this.citationLivre3++;
//       //  }else if (element.infos.saison === this.citationByBook[3].title){
//       //   this.citationLivre4++;
//       //  }else if (element.infos.saison === this.citationByBook[4].title){
//       //   this.citationLivre5++;
//       //  }else if (element.infos.saison === this.citationByBook[5].title){
//       //   this.citationLivre6++;
//         }
        
       
// });
  
//   //console.log(this.citationByBook[book].title);
//     //    console.log(this.citationLivre);

//      //console.log('livre : ' + this.citationLivre);                       debug ok !
//     // console.log('livre 2 : ' + this.citationLivreII.length);
//     // console.log('livre 3 : ' + this.citationLivreIII.length);
//     // console.log('livre 4 : ' + this.citationLivreIV.length);
//     // console.log('livre 5 : ' + this.citationLivreV.length);
//     // console.log('livre 6 : ' + this.citationLivreVI.length);
//   }

}

