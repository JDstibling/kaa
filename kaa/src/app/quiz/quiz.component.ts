import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ThemePalette } from '@angular/material/core';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';
import { ScoreService } from '../services/score.service';
import { CitationService } from '../services/citation.service';

import { quiz } from '../config/quiz';
import { quizResult } from '../config/quizResult';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  animations: [
    trigger('openClose', [
      state(
        'end',
        style({
          transform: 'translateX(50px)',
          opacity: 0,
        })
      ),
      state(
        'start',
        style({
          transform: 'translateX(0px)',
          opacity: 1,
        })
      ),
      transition('start => end', animate('.25s')),
      transition('end => start', animate('.25s')),
    ]),
    trigger('appear', [
      state(
        'end',
        style({
          transform: 'translateY(50px)',
          opacity: 0,
        })
      ),
      state(
        'start',
        style({
          transform: 'translateY(0px)',
          opacity: 1,
        })
      ),
      transition('start => end', animate('.15s')),
      transition('end => start', animate('.15s')),
    ]),
  ],
  encapsulation: ViewEncapsulation.None,
  
})
export class QuizComponent implements OnInit {

  AllScores!: Observable<any[]>;
  user = this.authService.currentUser$;
  color : ThemePalette = 'primary' ;
  mode : MatProgressSpinnerModule = 'déterminé' ;
  value = 100 ;
  quizSelected: [] = [];
  pictureAtRandomCitation: string = "";
  quiz = quiz;
  quizResult = quizResult;
  gifSelect = "";
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
  startGame!: boolean;
  textButton = "Jouer";
  resultBox!: string[];
  randomPerso1: any;
  randomPerso2: any;
  winCount = 0;
  loseCount = 0;
  state = "end";
  feedBackDisplay = false;
  accroche = "Une petite partie ?";
  timeChrono = 20;
  myInterval: any;
  countPoint= 0;
  actualDate: any;
  allscore = [];
  
  constructor(public usersService: UsersService, private CitationService: CitationService, public authService: AuthService, public ScoreService: ScoreService) { 
    this.AllScores = this.ScoreService.getAllScore();
    //console.log(this.allscore);
    
  }

  ngOnInit(): void {
    this.citation = this.CitationService.getCitations();
    this.casting = this.CitationService.getCasting();
    this.quizGenerate();
    this.resultBox = [];
  }

  chrono() {
    //paramétrage du timer
    this.timeChrono = 20;
    this.value = 100;
    this.myInterval = setInterval(() => {
      this.timeChrono --;
      this.value -=5;
      if (this.timeChrono === 0){
        //si timer end, simuler une mauvaise réponse
        clearInterval(this.myInterval);
        const simu = document.getElementById("n1");
        simu?.click();
      }
    }, 1000)
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
      }
      if(this.randomNumber[0] == this.randomNumber[1]){
        this.randomNumber[0] += 2;
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

    clearInterval(this.myInterval);
    this.countPoint = 0;
    this.chrono();
    this.state = "start";
    this.accroche = "C'est plus facile à comprendre que le chante sloubi, alors essayez de deviner !"
    this.feedBackDisplay = false;
    this.quizGenerate();
    this.resultBox = [];
    this.stepQuiz = 0;
    this.startGame = true;
    this.winCount = 0;
    this.loseCount = 0;
    if(this.stepQuiz === 0 && this.endStatus === 0){
      this.endStatus = 1;
      this.textButton = "Relancer le quiz";
    }
  }

  game(event:any){
    let currentTime = this.timeChrono;
    clearInterval(this.myInterval);
    this.chrono();

    this.state = "end";
    //récupère l'id de la question en cours
    let stringToConvert = document.getElementById("count")?.innerHTML;
    let numberValue = Number(stringToConvert);
    this.currentItem = numberValue;
    
    if(event.target.id === "g"){
      //récupérer le chrono au moment du clic si bonne réponse et attribuer les points correspondant
      this.countPoint = this.countPoint + (currentTime);
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
        // une fois terminé, on stop le chrono
        clearInterval(this.myInterval);

        //enregistrement des data du joueur
        this.actualDate = new Date().toLocaleDateString("fr");
        this.usersService.currentUserProfile$.subscribe((el) => {
          const currentPlayer = el?.displayName;
          this.ScoreService.addFirebase(currentPlayer, this.countPoint,this.actualDate);
          //console.log(this.allscore);
          
        })
        
        this.startGame = false;
        this.textButton = "Réessayer";
        this.feedBackDisplay = true;
        this.stepQuiz = 0;
        this.endStatus = 0;

        // compteur de bonne réponses
        let countgoodAnswer = 0;

        this.quiz.forEach(element => {
          if(element.result === true){
            countgoodAnswer ++;
          }
        });
        // reaction en fonction du résultat du quiz
        if (countgoodAnswer <= 2){
          this.gifSelect = this.quizResult[0].gif;
          this.accroche = this.quizResult[0].text
        }else if(countgoodAnswer >2 && countgoodAnswer <=5){
          this.gifSelect = this.quizResult[1].gif;
          this.accroche = this.quizResult[1].text
        }else if(countgoodAnswer >5 && countgoodAnswer <=7 ){
          this.gifSelect = this.quizResult[2].gif;
          this.accroche = this.quizResult[2].text
        }else if(countgoodAnswer >7 && countgoodAnswer <=9){
          this.gifSelect = this.quizResult[3].gif;
          this.accroche = this.quizResult[3].text
        }else if(countgoodAnswer = 10){
          this.gifSelect = this.quizResult[4].gif;
          this.accroche = this.quizResult[4].text
        }
      };
      this.state = "start";
    }, 1000)
  }

}
