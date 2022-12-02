import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent implements OnInit {

  randomGif = ""
  gifArray = [
    "https://kaamelott-gifboard.fr/gifs/faut-une-citation-latine.gif",
    "https://kaamelott-gifboard.fr/gifs/cest-honteux.gif",
    "https://kaamelott-gifboard.fr/gifs/terme-veut-rien-dire.gif",
    "https://kaamelott-gifboard.fr/gifs/une-embuche.gif",
    "https://kaamelott-gifboard.fr/gifs/aujourdhui-jai-rien-moi.gif"
  ]

  ngOnInit(): void {
    const numRandom = Math.floor(Math.random() * this.gifArray.length);
    this.randomGif = this.gifArray[numRandom];
    console.log(numRandom);
  }

}
