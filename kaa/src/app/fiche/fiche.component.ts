import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
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
    trigger('fadeText2', [
      transition(':enter', [
        style({ opacity: 0, width: 0 }),
        animate(
          '250ms ease-in-out',
          keyframes([style({ width: '*' }), style({ opacity: 1 })])
        ),
      ]),
      transition(':leave', [
        style({ opacity: 1, width: '*' }),
        animate(
          '250ms ease-in-out',
          keyframes([style({ opacity: 0 }), style({ width: 0 })])
        ),
      ]),
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
      transition('false => true', animate('300ms ease-in-out')),
    ]),
  ],
  encapsulation: ViewEncapsulation.None,
})
export class FicheComponent implements OnInit, OnDestroy, AfterContentInit {
  routeSub: any;
  castingId!: number;
  image: string = "";
  casting: any = [];
  persoSelected!: string;
  animationTiming!: Array<Boolean>;

  constructor(private route: ActivatedRoute, private _CitationService: CitationService) { }

  ngOnInit(): void {
    this.animationTiming = [false, false, false, false];
    this.routeSub = this.route.params.subscribe(params => {
      //console.log(params) //log the entire params object
      console.log(params) //log the value of id
      this.castingId = params['id'];
      //console.log(this.castingId);

    });
    this.getImgPerso();
  }

  ngOnDestroy(): void {
    this.animationTiming = [];
  }

  ngAfterContentInit(): void {
    this.onAppear();
  }

  getImgPerso() {
    this.casting = this._CitationService.getCasting();
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
          }, 350);
        }, 350);
      }, 350);
    }, 500);
  }

}
