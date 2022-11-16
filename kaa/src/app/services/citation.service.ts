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

  getCitations() {
     return Citations;
   }

  getCasting() {
    return Casting;
  }

  getCitationByBook() {
    return this.citationByBook;
  }

}

