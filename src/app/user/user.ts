import { Component } from '@angular/core';
import { Game } from "../game/game";

@Component({
  selector: 'app-user',
  imports: [Game],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  //propiedades
  username = "GG";
  isLoggedIn = false;

  great(){
    alert("holi")
  }
}
