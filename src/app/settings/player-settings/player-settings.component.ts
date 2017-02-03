import { Component, OnInit, Input } from '@angular/core';
import { Player } from './../../models';
import { GameService } from './../../services';

@Component({
  selector: 'player-settings',
  templateUrl: './player-settings.component.html',
  styleUrls: ['./player-settings.component.scss']
})
export class PlayerSettingsComponent implements OnInit {
  @Input('player') player: Player;
  constructor(private gameService: GameService) { }

  ngOnInit() {
  }

  removePlayer(){
    this.gameService.removePlayer(this.player);
  }

}
