import { Component, Input, OnInit } from '@angular/core';
//import { citation } from '../models/citation.model';

@Component({
  selector: 'app-single-citation',
  templateUrl: './single-citation.component.html',
  styleUrls: ['./single-citation.component.scss']
})
export class SingleCitationComponent implements OnInit {

  @Input() citation!: any;
  @Input() episode!: any;
  @Input() saison!: any;
  @Input() perso!: any;

  text: string = "";

  constructor() { }

  ngOnInit(): void {
    this.text = this.citation[0].citation;
  
  }

}
