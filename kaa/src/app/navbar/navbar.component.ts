import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {filter } from 'rxjs';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  displayNavBar:boolean = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: { target: { scrollingElement: { scrollTop: any; }; }; }) {
    const scrollTop = event.target.scrollingElement.scrollTop;
     this.displayNavBar = scrollTop < 50 ? true : false
  }

  constructor(router: Router) {
    router.events.pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        if(event.url == '/home' || event.url == '/dashboard'){
          this.displayNavBar = false;
        }else {
          this.displayNavBar = true;
        }
    });
  }
}
