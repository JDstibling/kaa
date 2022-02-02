import { Component } from '@angular/core';
import { homeNav } from '../config/home-nav';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('test', [
      // ...
      state('1', style({
        height: '12em',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('2', style({
        height: '0em',
        opacity: 0.8,
        backgroundColor: 'blue'
      })),
      transition('* => *', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
})
export class HomeComponent {

  homeNav = homeNav;

  functiontest(item: any) {
    homeNav.forEach(item => {
      item.selected = false;
      //console.log(item);
      
    });
    item.selected = true;
    //console.log(homeNav);
    
  }

  test() {
    //console.log('testok');
    
  }


}
