import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { quiz } from '../config/quiz';

import { CitationService } from '../services/citation.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  animations: [
    trigger('openClose', [
      state(
        'end',
        style({
          opacity: 0,
          transform: 'translateX(10px)',
        })
      ),
      state(
        'start',
        style({
          opacity: 1,
          transform: 'translateX(0px)',
        })
      ),
      transition('start => end', animate('.25s')),
      transition('end => start', animate('.25s')),
    ]),
  ],
  encapsulation: ViewEncapsulation.None,
  
})
export class QuizComponent implements OnInit {

  quizSelected: [] = [];
  pictureAtRandomCitation: string = "";
  quiz = quiz;
  quizPicture = [];
  casting: any = [];
  citation: ({ citation: string; infos: { acteur: string; personnage: string; auteur: string; saison: string; episode: string; }; id: number; } | { citation: string; infos: { auteur: string; acteur: string; personnage: null; saison: string; episode: string; }; id: number; } | { citation: string; infos: { auteur: string; acteur: string; personnage: string; saison: string; episode?: undefined; }; id: number; })[] = [];
  randomIndex : number[]= [];
  randomNumber: number[]= [];
  event: any;
  stepQuiz = 0;
  endStatus= 0;
  currentItem: number | undefined;
  idpersoAtRandomCitation!: number;
  startGame = true;
  textButton = "Jouer";
  resultBox!: string[];
  randomPerso1: any;
  randomPerso2: any;
  winCount = 0;
  loseCount = 0;
  state = "end";
  

  constructor(private CitationService: CitationService) { }

  ngOnInit(): void {
    this.citation = this.CitationService.getCitations();
    this.casting = this.CitationService.getCasting();
    this.quizGenerate();
    this.resultBox = [];
  }
  
  quizGenerate() {
    
    //boucle sur toutes les questions du quiz
    for (let itemQuiz = 0; itemQuiz < 10; itemQuiz++) {
    
      //remmise à zéro du tableau de chiffre aléatoire pour en garder que 2
      this.randomNumber = [];

      // récupération d'une citation aléatoire (bonne réponse)
      const randomCitation = this.citation[Math.floor(Math.random() * this.citation.length)];
      
      //attribution de la citation pour chaque questions (10 au total)
      this.quiz[itemQuiz].citation = randomCitation.citation;
      
      //récup du nom du perso concerné par la citation (bonne réponse) :
      this.quiz[itemQuiz].persoAtRandomCitation = randomCitation.infos.personnage;
      
      // récupération de l'image du personnage concerné (bonne réponse)
      this.pictureAtRandomCitation = '../../assets/images/persos/' + this.quiz[itemQuiz].persoAtRandomCitation + '.jpg';
      this.quiz[itemQuiz].picture.goodPicture = this.pictureAtRandomCitation;
      
      //recherche de l'id du personnage de la bonne réponde dans la liste de casting pour ne pas qu'il soit sélectionné parmis les maubvaise réponses
      this.casting.forEach((element: {
        id: any; personnage: any; 
      }) => {
        if (element.personnage === this.quiz[itemQuiz].persoAtRandomCitation){
          // récupération de l'id du personnage de la sitation sélectionné
          this.idpersoAtRandomCitation = element.id;
        }
      });
      
      // attribution de chiffres aléatoires
      for (let i = 0; i < 2; i++) {

        // pour mélanger l'ordre des images mauvaise avec la bonne
        this.randomIndex.push(Math.floor(Math.random() * 6 -2));
      
        // pour aller chercher aléatoirement des personnages pour les fausses réponses
        let addNumberRandom = Math.floor(Math.random() * this.casting.length);

        // si numéro aléatoire égale à l'id de la bonne réponse, prendre l'id suivant
        if (addNumberRandom == this.idpersoAtRandomCitation){
          addNumberRandom ++;
          this.randomNumber.push(addNumberRandom);
        }else {
          this.randomNumber.push(addNumberRandom);
        }

        console.log(this.randomNumber);
        

      }
      
      // //récupération d'une image aléatoire non égale à la premiere  (mauvaise réponse)
      this.randomPerso1 = this.casting[this.randomNumber[0]].personnage;
      
      this.randomPerso2 = this.casting[this.randomNumber[1]].personnage;

      // vérification si pas de doublon pour éviter d'avoir une mauvaise réponse identique à la bonne

       if(this.randomNumber[0] == this.randomNumber[1]) {
        this.randomNumber[0] += 1;
         this.quiz[itemQuiz].picture.noGoodPicture1 = '../../assets/images/persos/' + this.randomPerso1 + '.jpg';
         this.quiz[itemQuiz].picture.noGoodPicture2 = '../../assets/images/persos/' + this.randomPerso2 + '.jpg';
        } else {
          this.quiz[itemQuiz].picture.noGoodPicture1 = '../../assets/images/persos/' + this.randomPerso1 + '.jpg';
          this.quiz[itemQuiz].picture.noGoodPicture2 = '../../assets/images/persos/' + this.randomPerso2 + '.jpg';
        }
    }
  }

  restartGame(){
    this.state = "start";
    this.quizGenerate();
    this.resultBox = [];
    this.stepQuiz = 0;
    this.startGame = true;
    this.winCount = 0;
    this.loseCount = 0;
    if(this.stepQuiz === 0 && this.endStatus === 0){
      this.endStatus = 1;
      this.textButton = "Relancer le quiz"
    }
  }

  game(event:any){

    this.state = "end";
    //récupère l'id de la question en cours
    let stringToConvert = document.getElementById("count")?.innerHTML;
    let numberValue = Number(stringToConvert);
    this.currentItem = numberValue;

    if(event.target.id === "g"){
      this.winCount ++;
      this.quiz[this.currentItem -1].result = true;
      let str = this.quiz[this.currentItem-1].picture.goodPicture
      let subStr = str.substring(27);
      subStr = subStr.substring(0, subStr.length - 4);
      this.resultBox.push(subStr);
    }else {
      this.loseCount ++;
      this.quiz[this.currentItem -1].result = false;
      if (event.target.id === "n1"){
        let str = this.quiz[this.currentItem-1].picture.noGoodPicture1
        let subStr = str.substring(27);
        subStr = subStr.substring(0, subStr.length - 4)
        this.resultBox.push(subStr);
        
      }else if (event.target.id === "n2"){
        let str = this.quiz[this.currentItem-1].picture.noGoodPicture2
        let subStr = str.substring(27);
        subStr = subStr.substring(0, subStr.length - 4)
        this.resultBox.push(subStr);
      }
      
    }
    setTimeout(() => {
      this.stepQuiz +=1;
      if(this.stepQuiz === 10){
        this.textButton = "Lancer le quiz";
        this.stepQuiz = 0;
        this.endStatus = 0;
        // compteur de bonne réponses
        let countgoodAnswer = 0;
        this.quiz.forEach(element => {
          if(element.result === true){
            countgoodAnswer ++;
          }
          this.startGame = false;
        });
        alert("vous avez un résultat de : " + countgoodAnswer)
      };
      console.log("Delayed for 1 second.");
      this.state = "start";
    }, 1000)

    // à la fin du jeu (prévoir ensuite une méthode end game !)
  }
}
