import { Component, OnInit } from '@angular/core';
import { GameService } from './../services';
import { Observable } from 'rxjs/Rx';
import { Challenge } from './../models';

@Component({
  selector: 'game-container',
  templateUrl: './game-container.component.html',
  styleUrls: ['./game-container.component.scss']
})
export class GameContainerComponent implements OnInit {
  private challenges: Challenge[] = [];
  constructor(private gameService: GameService) {

  }

  ngOnInit() {
    this.gameService.activeRound.subscribe((active) => console.log(active));
    this.gameService.challenges.subscribe((challenges) => this.challenges = challenges);
    this.gameService.startRound();
    this.gameService.addPlayer('Ante');
    this.gameService.addPlayer('Klante');
    this.gameService.addPlayer('Vante');
  }
}
