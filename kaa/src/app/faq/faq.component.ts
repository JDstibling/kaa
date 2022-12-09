import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
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
      transition('false => true', animate('450ms ease-in-out')),
    ]),
    trigger('fadeTextSlide', [
      state(
        'false',
        style({
          opacity: 0,
          transform: 'translateX(-150px)translateY(20px)',
        })
      ),
      state(
        'true',
        style({
          opacity: 1,
          transform: 'translateX(0)translateY(0px)',
        })
      ),
      transition('false => true', animate('1500ms ease-in-out')),
    ]),
    trigger('fadepictureHeight', [
      state(
        'false',
        style({
          opacity: 0,
          height: 0,
          width: 0,
          transform: 'rotate(500deg)'
        })
      ),
      state(
        'true',
        style({
          opacity: 1,
          height: 210,
          width: 210,
          transform: 'rotate(0deg)'
        })
      ),
      transition('false => true', animate('500ms ease-in-out')),
    ]),
  ],
  encapsulation: ViewEncapsulation.None,
})
export class FaqComponent implements OnInit {

  animationTiming!: Array<Boolean>;

  constructor() { }

  ngOnInit(): void {
    this.animationTiming = [false, false, false, false, false, false, false, false];
  }

  ngAfterContentInit(): void {
    this.onAppear();
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
              setTimeout(() => {
                this.animationTiming[5] = true;
                setTimeout(() => {
                  this.animationTiming[6] = true;
                  setTimeout(() => {
                    this.animationTiming[7] = true;
                }, 350);
              }, 350);
            }, 350);
          }, 500);
        }, 600);
      }, 600);
    }, 600);
  }, 600);
  }
  // onAppear() {
  //   setTimeout(() => {
  //     this.animationTiming[0] = true;
  //     setTimeout(() => {
  //       this.animationTiming[1] = true;
  //       setTimeout(() => {
  //         this.animationTiming[2] = true;
  //         setTimeout(() => {
  //           this.animationTiming[3] = true;
  //           setTimeout(() => {
  //             this.animationTiming[4] = true;
  //         }, 1000);
  //       }, 1000);
  //     }, 1000);
  //   }, 1000);
  // }, 1000);
  // }

}
