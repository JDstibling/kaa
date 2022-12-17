import { Component, OnInit } from '@angular/core';

import { quiz } from '../config/quiz';

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
  quizPicture = [];
  //pictureInterface = PictureInterface;
  casting: any = [];
  citation: ({ citation: string; infos: { acteur: string; personnage: string; auteur: string; saison: string; episode: string; }; id: number; } | { citation: string; infos: { auteur: string; acteur: string; personnage: null; saison: string; episode: string; }; id: number; } | { citation: string; infos: { auteur: string; acteur: string; personnage: string; saison: string; episode?: undefined; }; id: number; })[] = [];
  randomIndexNum0 = 0;
  randomIndexNum1 = 0;
  randomIndexNum2 = 0;
  randomIndexNum3 = 0;
  randomIndex : number[]= [];
  randomNumber: number[]= [];
  event: any;
  stepQuiz = 0;
  endStatus= "none";
  orderIndex!: number;
  currentItem: number | undefined;

  constructor(private CitationService: CitationService) { }

  ngOnInit(): void {
    this.citation = this.CitationService.getCitations();
    this.casting = this.CitationService.getCasting();
    //console.log(this.citation);
    this.quizGenerate();
    console.log(this.quiz);
    
  }
  
  quizGenerate() {
    
    //boucle sur toutes les questions du quiz
    for (let itemQuiz = 0; itemQuiz < 10; itemQuiz++) {
      
      // attribution de chiffres aléatoires
      this.randomNumber = [];
      for (let i = -1; i < 3; i++) {
        // pour mélanger l'ordre des images mauvaise avec la bonne
        this.randomIndex.push(Math.floor(Math.random() * 4 -2));
        
        // pour aller chercher aléatoirement des personnages pour les fausses réponses
        this.randomNumber.push(Math.floor(Math.random() * this.casting.length));
      }
      //console.log(this.randomIndex );
      this.orderIndex = itemQuiz;
      //console.log(this.orderIndex);
      

  
      // récupération d'une citation aléatoire (bonne réponse)
       const randomCitation = this.citation[Math.floor(Math.random() * this.citation.length)];
       //console.log(randomCitation);

      //attribution de la citation pour chaque questions (10 au total)
      this.quiz[itemQuiz].citation = randomCitation.citation;
      
      // récupération du nom du personnage associé (bonne réponse)
      const persoAtRandomCitation = randomCitation.infos.personnage;
  
      // récupération de l'image du personnage concerné (bonne réponse)
      this.pictureAtRandomCitation = '../../assets/images/persos/' + persoAtRandomCitation + '.jpg';
      this.quiz[itemQuiz].picture.goodPicture = this.pictureAtRandomCitation;
  
      // //récupération d'une image aléatoire non égale à la premiere (première mauvaise réponse)
       let randomPerso1 = this.casting[this.randomNumber[0]].personnage;
       //console.log("randomPerso1 " + this.randomNumber[0]);
       
       let randomPerso2 = this.casting[this.randomNumber[1]].personnage;
       //console.log("randomPerso2 " + this.randomNumber[1])

      // vérification si pas de doublon pour éviter d'avoir une mauvaise réponse identique à la bonne
      //console.log("perso ok: " + persoAtRandomCitation + "les autres : " + randomPerso1 + randomPerso2);
      //console.log(this.randomNumber);
      
      
       if((randomPerso1 === persoAtRandomCitation) || (randomPerso1 === randomPerso2)) {
         this.randomNumber[0] +=1;
         this.randomNumber[1] +=3;
         this.randomNumber[2] +=2;
         //console.log(this.randomNumber);
         this.quiz[itemQuiz].picture.noGoodPicture1 = '../../assets/images/persos/' + randomPerso1 + '.jpg';
        } else {
          this.quiz[itemQuiz].picture.noGoodPicture1 = '../../assets/images/persos/' + randomPerso1 + '.jpg';
        }
      if(randomPerso2 === persoAtRandomCitation) {
        this.randomNumber[1] +=2;
        this.randomNumber[2] +=1;
        //console.log(this.randomNumber);
        this.quiz[itemQuiz].picture.noGoodPicture2 = '../../assets/images/persos/' + randomPerso2 + '.jpg';
      } else {
          this.quiz[itemQuiz].picture.noGoodPicture2 = '../../assets/images/persos/' + randomPerso2 + '.jpg';
        }
      //return quiz
      
    }
  //console.log(this.quiz);
  }

  restartGame(){
    this.quizGenerate();
    if(this.stepQuiz === 0 && this.endStatus === "none"){
      this.endStatus = "initial";
    }
  }

  game(event:any){
    //récupère l'id de la question en cours
    let stringToConvert = document.getElementById("count")?.innerHTML;
    let numberValue = Number(stringToConvert);
    this.currentItem = numberValue;
  
    //récupération de l'id de l'image choisis au click
    if(event.target.id === "g"){
      //alert("gagné !!!")
      this.quiz[this.currentItem -1].result = true;
    }else {
      //alert("perdu!!!!!");
      this.quiz[this.currentItem -1].result = false;
    }
    this.stepQuiz +=1;
    if(this.stepQuiz === 10){
      this.stepQuiz = 0;
      this.endStatus = "none";
      let countgoodAnswer = 0;
      this.quiz.forEach(element => {
        if(element.result === true){
          countgoodAnswer ++;
        }
      });
      alert("vous avez un résultat de : " + countgoodAnswer)
    }
    // à la fin du jeu (prévoir ensuite une méthode end game !)
  }

}
