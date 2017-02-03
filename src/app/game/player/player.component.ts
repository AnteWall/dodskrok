import { Component, OnInit, Input } from '@angular/core';
import { Player } from './../../models';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @Input('player') player: Player;

  constructor() { }

  ngOnInit() {
  }

  getPlayerStyle() {
    if(!this.player) return
    return {
      'background-color': this.player.color, 
      'background-image': `url(assets/profile/${this.player.icon}.png)`
    };
  }

}
