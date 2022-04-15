import { Component, Input } from '@angular/core';

import { Text } from '../interface/home.interface';

@Component({
  selector: 'app-text-home',
  templateUrl: './text-home.component.html',
  styleUrls: ['./text-home.component.css']
})
export class TextHomeComponent {
  @Input() textHome: Text = {
    text: "Benvinguts a les aventures de l'heroi i la nau misteriosa"
  }
  
}
