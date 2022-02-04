import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CitationService } from '../services/citation.service';

@Component({
  selector: 'app-fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.scss']
})
export class FicheComponent implements OnInit {
  routeSub: any;
  castingId!: number;
  image: string = "";
  casting: any = [];

  constructor(private route: ActivatedRoute, private _CitationService: CitationService) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      //console.log(params) //log the entire params object
      console.log(params) //log the value of id
      this.castingId = params['id'];
      //console.log(this.castingId);
      

    });
    this.getImgPerso();
  }

  getImgPerso() {
    this.casting = this._CitationService.getCasting();
    this.image = '../../assets/images/persos/' + this.casting[this.castingId].personnage + '.jpg';
    console.log(this.image);
  }

}
