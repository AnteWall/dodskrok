import { Component, OnInit, Input } from '@angular/core';
import { Challenge, Player } from './../../models';
import { GameService } from './../../services';

@Component({
  selector: 'challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.scss']
})
export class ChallengeComponent implements OnInit {
  @Input('challenge') challenge: Challenge;
  private players: Player[] = [];
  private currentIndex = 1;

  constructor(private gameService: GameService) {
    this.gameService.players.subscribe((players) => this.players = players);
  }

  ngOnInit() {
    setInterval(() => {
        this.currentIndex += 1;
        if(this.currentIndex >= this.players.length)
          this.currentIndex = 0;
    }, 200);
  }

  

  getPlayerStyle(playerIndex: number) {
    let zIndex = (playerIndex >= this.currentIndex) ? this.players.length - playerIndex : 0;
    let scale = (playerIndex >= this.currentIndex) ? 1 - ((playerIndex - this.currentIndex) * 0.1) : 1 - ((this.players.length - (this.currentIndex - playerIndex))*0.1);
    scale = (scale < 0) ? 0 : scale; // Prevent scale from going below zero
    return {
      'z-index': zIndex,
      'transform': `scale(${scale})`,
      'opacity': (playerIndex === this.currentIndex) ? 1 : 0.8
    }
  }

}
