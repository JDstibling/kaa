import { Component, OnInit } from '@angular/core';
import { citationByBook } from '../models/citationByBook.model';
import { CitationService } from '../services/citation.service';

@Component({
  selector: 'app-citations',
  templateUrl: './citations.component.html',
  styleUrls: ['./citations.component.scss']
})
export class CitationsComponent implements OnInit {

  citationByBook: citationByBook[] = []

  constructor(private citationService: CitationService) { }

  ngOnInit(): void {
    this.citationByBook = this.citationService.getCitationByBook();
    console.log(this.citationByBook);
  }

}
