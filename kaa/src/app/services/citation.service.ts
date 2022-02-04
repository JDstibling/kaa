import { Injectable } from '@angular/core';

import Citations from '../../assets/datas/citations.json';
import Casting from '../../assets/datas/casting.json';

@Injectable({
  providedIn: 'root'
})
export class CitationService{

  constructor() {
   }

  getCitations() {
     return Citations;
   }

  getCasting() {
    return Casting;
  }

}

