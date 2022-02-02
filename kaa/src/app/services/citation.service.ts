import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CitationService implements OnInit{
  data: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {      
  // Simple GET request with response type <any>

}

  get() {
    this.http.get('https://kaamelott.chaudie.re/api').subscribe(data => {
        this.data = data;
        console.log(this.data);
        return data;
    })
    console.log('requête lancé');
    
  }

}

