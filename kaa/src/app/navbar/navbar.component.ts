import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {filter } from 'rxjs';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  displayNavBar:boolean = false;

  constructor(router: Router) {
    router.events.pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        if(event.url == '/home' || event.url == '/'  || event.url =='/notFound'){
          this.displayNavBar = false;
        }else {
          this.displayNavBar = true;
        }
    });
  }
}
