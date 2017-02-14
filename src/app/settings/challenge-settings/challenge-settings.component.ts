import { Component, OnInit, Input } from '@angular/core';
import { Challenge } from './../../models';
import { GameService } from './../../services';
@Component({
  selector: 'challenge-settings',
  templateUrl: './challenge-settings.component.html',
  styleUrls: ['./challenge-settings.component.scss']
})
export class ChallengeSettingsComponent implements OnInit {
  @Input('challenge') challenge: Challenge;
  
  constructor(private gameService: GameService) { }

  ngOnInit() {
  }

  removeChallenge() {
    this.gameService.removeChallenge(this.challenge);
  }

}
