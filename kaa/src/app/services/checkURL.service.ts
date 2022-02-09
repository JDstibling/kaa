import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class checkURLService{
    
    subscriptionURL!: Subscription;

  constructor() {
   }

  getCurrentURL() {
     return  window.location.href;
   }

   subscribe() {
       this.subscriptionURL;
   }


}