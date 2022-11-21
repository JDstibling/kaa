import { Injectable } from '@angular/core';
import { filter, map, Observable, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class checkURLService{
    
      subscriptionURL!: Subscription;

  constructor() {
   }

  getCurrentURL() {
      return  window.location.href;
    //return this.http.get(environment.api.equipments.list + filter).pipe(map((res: any) => res.data));
   }

   subscribe() {
       this.subscriptionURL;
   }


}