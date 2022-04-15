import { Component } from '@angular/core';

import { Sentence } from './../interface/home.interface';


@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})

export class EscenaComponent {

  public currentSentence   : number;
  public currentBackground : string;


  constructor(){
    this.currentSentence   = 0;
    this.currentBackground = 'img1.jpg';

  }

  ngOnInit(): void {
    this.currentBackground = this.sentenceArray[0].img;
  }

  sentenceArray: Sentence[]= [
     {
       sentence: "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial",
       img:"img1.jpg"
      },
     {
       sentence: "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.",
       img:"img2.jpg"
      }, 
     {
       sentence: "L'heroi va decidir travessar la porta que el portava a casa",
       img:"img3.jpg"
      }, 
     {
      sentence:  "Mentrestant, altres heroes no van tenir tanta sort en la seva elecció ...",
      img:"img4.jpg"
    } 
  ]; 

    
 
  delayButton() {
    this.currentSentence--;
  }

  advanceButton() {
     if (this.currentSentence <= this.sentenceArray.length-1){
         this.currentSentence++;
     }
//      for (let i = 0; i < this.currentBackground.length; i++) {
//          this.currentBackground += i;
//      }    

}

}