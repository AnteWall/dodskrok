import { Component, OnInit } from '@angular/core';
import { GameService } from './../game.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'game-container',
  templateUrl: './game-container.component.html',
  styleUrls: ['./game-container.component.scss']
})
export class GameContainerComponent implements OnInit {

  constructor(private gameService: GameService) {

  }

  ngOnInit() {
    this.gameService.activeRound.subscribe((active) => console.log(active));
    this.gameService.challenges.subscribe((challenges) => console.log(challenges));
    this.gameService.startRound();
  }

}
