import { Component } from '@angular/core';

import { Text } from './interface/home.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  textHome: Text = {
    text: "Benvinguts a les aventures de l'heroi i la nau misteriosa"
  }
  
  show: boolean;

  constructor() {
    this.show = false;
  }
   
  start(){
    this.show === true ? (this.show=false):(this.show=true);
    console.log(this.show);
  }

}
