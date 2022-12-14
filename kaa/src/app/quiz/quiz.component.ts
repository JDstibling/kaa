import { Component, OnInit } from '@angular/core';

import { quiz, quizInterface } from '../config/quiz';

import { CitationService } from '../services/citation.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  quizSelected: [] = [];
  pictureAtRandomCitation: string = "";
  quiz = quiz;
  casting: any = [];
  citation: ({ citation: string; infos: { acteur: string; personnage: string; auteur: string; saison: string; episode: string; }; id: number; } | { citation: string; infos: { auteur: string; acteur: string; personnage: null; saison: string; episode: string; }; id: number; } | { citation: string; infos: { auteur: string; acteur: string; personnage: string; saison: string; episode?: undefined; }; id: number; })[] = [];
  randomIndexNum0 = 0;
  randomIndexNum1 = 0;
  randomIndexNum2 = 0;
  randomIndexNum3 = 0;


  constructor(private CitationService: CitationService) { }

  ngOnInit(): void {
    this.citation = this.CitationService.getCitations();
    this.casting = this.CitationService.getCasting();
    //console.log(this.citation);
    this.quizGenerate();
    
  }

  quizGenerate() {

    this.randomIndexNum0 = Math.floor(Math.random() * 4);
    this.randomIndexNum1 = Math.floor(Math.random() * 4);
    this.randomIndexNum2 = Math.floor(Math.random() * 4);
    this.randomIndexNum3 = Math.floor(Math.random() * 4);
    console.log(this.randomIndexNum0 + " " + this.randomIndexNum1 + " " + this.randomIndexNum2 + " " + this.randomIndexNum3);
    

    

    // récupération d'une citation aléatoire (bonne réponse)
    const randomCitation = this.citation[Math.floor(Math.random() * this.citation.length)];
    console.log(randomCitation);

    this.quiz[0].citation = randomCitation.citation;
    console.log(randomCitation);

  
    // récupération du personnage associé (bonne réponse)
    const persoAtRandomCitation = randomCitation.infos.personnage;

    // récupération de l'image du personnage concerné (bonne réponse)
    this.pictureAtRandomCitation = '../../assets/images/persos/' + persoAtRandomCitation + '.jpg';
    this.quiz[0].goodPicture = this.pictureAtRandomCitation;

    // //récupération d'une image aléatoire non égale à la premiere (première mauvaise réponse)
    // attribution de 3 numéros aléatoires
     let num1random = Math.floor(Math.random() * this.casting.length);
     let num2random = num1random + Math.floor(5);
     let num3random = num2random + Math.floor(2);

     let randomPerso1 = this.casting[num1random].personnage;
     let randomPerso2 = this.casting[num2random].personnage;
     let randomPerso3 = this.casting[num3random].personnage;
     console.log(randomPerso1 + " " + randomPerso2 + " " + randomPerso3);

    // vérification si pas de doublon pour éviter d'avoir une mauvaise réponse identique à la bonne
     if(randomPerso1 != persoAtRandomCitation || randomPerso2 != persoAtRandomCitation || randomPerso3 != persoAtRandomCitation) {
       this.quiz[0].noGoodPicture1 = '../../assets/images/persos/' + randomPerso1 + '.jpg';
       this.quiz[0].noGoodPicture2 = '../../assets/images/persos/' + randomPerso2 + '.jpg';
       this.quiz[0].noGoodPicture3 = '../../assets/images/persos/' + randomPerso3 + '.jpg';
       console.log(this.quiz);
      }
      else {
         num2random =+1;
         num3random =+1;
      }

    console.log(this.quiz);
    
    //return quiz
  }

}
