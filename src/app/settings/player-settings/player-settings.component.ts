import { Component, OnInit, Input } from '@angular/core';
import { Player } from './../../models';
@Component({
  selector: 'player-settings',
  templateUrl: './player-settings.component.html',
  styleUrls: ['./player-settings.component.scss']
})
export class PlayerSettingsComponent implements OnInit {
  @Input('player') player: Player;
  constructor() { }

  ngOnInit() {
  }

}
