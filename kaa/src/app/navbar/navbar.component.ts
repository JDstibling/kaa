import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
//import { Observable } from 'rxjs';
// import { Observable } from 'rxjs/internal/Observable';
import {filter } from 'rxjs';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  isMobile: Boolean = false;

  // @HostListener("window:resize", ["$event"])
  // onResize(event: { target: { innerWidth: any; }; }) {
  //   this.checkWidth(event.target.innerWidth);
  // }


  currentUrl!:string;
  displayNavBar:boolean = false;

  constructor(router: Router) {
    router.events.pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        if(event.url == '/home' || event.url == '/'){
          this.displayNavBar = false;
        }else {
          this.displayNavBar = true;
        }
    });
  }


  ngOnInit(): void {      
  }

}
