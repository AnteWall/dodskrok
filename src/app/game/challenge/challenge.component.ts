import { Component, OnInit } from '@angular/core';
import { Challenge, Player } from './../../models';
import { GameService } from './../../services';

@Component({
  selector: 'challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.scss']
})
export class ChallengeComponent implements OnInit {
  private players: Player[] = [];

  constructor(private gameService: GameService) {
    this.gameService.players.subscribe((players) => this.players = players);
  }

  ngOnInit() {
  }

}
