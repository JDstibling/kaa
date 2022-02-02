import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import Citations from '../../assets/datas/citations.json';
import Casting from '../../assets/datas/casting.json';

@Injectable({
  providedIn: 'root'
})
export class CitationService implements OnInit{

  constructor(private http: HttpClient) {
   }

  ngOnInit() {      
}

  getCitations() {
     return Citations;
   }

  getCasting() {
    return Casting;
  }

}

