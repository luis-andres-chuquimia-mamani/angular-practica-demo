import { Component, Input, input } from '@angular/core';
//import {User} from "../user/user";

@Component({
  selector: 'app-game',
  imports: [],
  templateUrl: './game.html',
  styleUrl: './game.css',
})
export class Game {
  @Input() username = '';
  games = [
    {
      id:1,
      name:"Lego"
    },
    {
      id:2,
      name:"Resident Evil 3"
    },
    {
      id:3,
      name:"Good Of Ware"
    }

  ]

}
