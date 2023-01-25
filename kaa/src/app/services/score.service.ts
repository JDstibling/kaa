import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { score } from '../config/score';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  AllScores!: Observable<any[]>;
  score = score;

  constructor(public firestore: AngularFirestore) { 
    this.AllScores = this.firestore.collection('Scores').valueChanges();
  }

  addFirebase(pseudo: string | any, score: number, date: Date) {

    // preparation data
    this.score[0].Pseudo = pseudo;
    this.score[0].Score = score;
    this.score[0].Date = date;
    
    // requête firebase
    this.firestore.collection('Scores').add({
      Pseudo: this.score[0].Pseudo,
      Score: this.score[0].Score,
      Date: this.score[0].Date
    })
  }

  getAllScore() {
    return this.AllScores;
  }
}
