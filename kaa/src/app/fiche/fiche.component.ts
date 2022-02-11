import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterContentInit, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CitationService } from '../services/citation.service';

@Component({
  selector: 'app-fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.scss'],
  animations: [
    trigger('fadeText', [
      state(
        'false',
        style({
          opacity: 0,
        })
      ),
      state(
        'true',
        style({
          opacity: 1,
        })
      ),
      transition('false => true', animate('250ms ease-in-out')),
    ]),
    trigger('fadeTextSlide', [
      state(
        'false',
        style({
          opacity: 0,
          transform: 'translateY(50px)',
        })
      ),
      state(
        'true',
        style({
          opacity: 1,
          transform: 'translateY(0)',
        })
      ),
      transition('false => true', animate('500ms ease-in-out')),
    ]),
  ],
  encapsulation: ViewEncapsulation.None,
})
export class FicheComponent implements OnInit, OnDestroy, AfterContentInit {
  routeSub: any;
  castingId!: number;
  image: string = "";
  casting: any = [];
  citation: any = [];
  persoSelected!: string;
  actorSelected!: string;
  animationTiming!: Array<Boolean>;
  linkWiki!: string;
  totalRepliqueByActor: number = 0;
  arrayRepliquePerPerso!: string[];
  randomReplique: string = "";
  saison!: string;
  episode!: string;
  arrayActorInBook!: string[];


  constructor(private router: ActivatedRoute, private _CitationService: CitationService) { }

  ngOnInit(): void {
    this.animationTiming = [false, false, false, false, false];
    this.routeSub = this.router.params.subscribe(params => {
      this.castingId = params['id'];
    });
    this.getImgPerso();
    this.getWikiActor();
    this.getInfoPerPerso();
    this.findInfoCitation();
  }

  ngOnDestroy(): void {
    this.animationTiming = [];
    this.routeSub.unsubscribe();
  }

  ngAfterContentInit(): void {
    this.onAppear();
  }

  getImgPerso() {
    this.casting = this._CitationService.getCasting();
    //console.log(this.casting);
    
    this.image = '../../assets/images/persos/' + this.casting[this.castingId].personnage + '.jpg';
    this.persoSelected = this.casting[this.castingId].personnage;
  }

  onAppear() {
    setTimeout(() => {
      this.animationTiming[0] = true;
      setTimeout(() => {
        this.animationTiming[1] = true;
        setTimeout(() => {
          this.animationTiming[2] = true;
          setTimeout(() => {
            this.animationTiming[3] = true;
            setTimeout(() => {
              this.animationTiming[4] = true;
          }, 350);
        }, 350);
      }, 350);
    }, 500);
  }, 600);
  }

  getWikiActor() {
    this.linkWiki = 'https://fr.wikipedia.org/wiki/' + this.casting[this.castingId].acteur.replace(/ /g, '_'); 
  }

  getInfoPerPerso() {
    this.citation = this._CitationService.getCitations();
    let arr: any[] = [];
    this.citation.forEach((element: any) => {
      // compilation des répliques du personnage
      if(element.infos.personnage === this.persoSelected){
        arr.push(element.citation)
        this.totalRepliqueByActor ++;
      }
    });
    //récupération d'une réplique random du perso
    this.randomReplique = arr[Math.floor(Math.random() * this.totalRepliqueByActor)] 
    //récupération du nom de l'acteur
    this.actorSelected = this.casting[this.castingId].acteur;
  }

  findInfoCitation() {
    // récupération des infos de la réplique sélectionné en random
    if (this.randomReplique){
      const findInfos = this.citation.find( (citation: { citation: string; }) => citation.citation === this.randomReplique);
      this.saison = findInfos.infos.saison;
      this.episode = findInfos.infos.episode;
    }

  }


}
