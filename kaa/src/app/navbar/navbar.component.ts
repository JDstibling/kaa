import { Component, HostListener, OnInit } from '@angular/core';
// import { Observable } from 'rxjs';
// import { environment } from '../../environments/environment';
// import { checkURLService } from '../services/checkURL.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  isMobile: Boolean = false;

  @HostListener("window:resize", ["$event"])
  onResize(event: { target: { innerWidth: any; }; }) {
    this.checkWidth(event.target.innerWidth);
  }


  checkWidth(innerWidth: any) {
    
  }

  //currentUrl!:string;
  displayNavBar:boolean = true;


  // constructor(private checkURLService: checkURLService) {
  //   this.displayNavbar();
  //   //console.log(this.checkURLService);
    
  // }

  // ngOnInit(): void {      
  //   // si la route est sur la home, masquer la navbar
  //   this.checkCurrentUrl();
    
  // }

  // ngAfterContentInit(): void {
  //   this.checkCurrentUrl();
  // }

  // checkCurrentUrl(): Observable<any> | string {
  //   // if(this.currentUrl == environment.API_URL + 'home'){
  //   //   this.displayNavBar = false;
  //   // }else {
  //   //   this.displayNavBar = true;
  //   // }
  //   let currentUrl = window.location.href
  //   return currentUrl;
  // }

  // displayNavbar() {
  //   let test = this.checkURLService.getCurrentURL();
  //   //console.log(test);
    
    
  // }

  

}
