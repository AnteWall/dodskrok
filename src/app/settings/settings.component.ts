import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import {NgbModal, ModalDismissReasons, NgbTabsetConfig} from '@ng-bootstrap/ng-bootstrap';

import { GameService } from '../services';
import { Player, Challenge } from './../models';
@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [NgbTabsetConfig]
})
export class SettingsComponent implements OnInit {
  private players: Array<Player>;
  private challenges: Array<Challenge>;
  constructor(private modalService: NgbModal, private gameService: GameService) {
    this.gameService.players.subscribe((players) => this.players = players);
    this.gameService.challenges.subscribe((challenges) => this.challenges = challenges);
  }

  ngOnInit() {

  }

  addChallenge() {
    this.gameService.addChallenge('New Challenge');
  }

  addPlayer() {
    this.gameService.addPlayer('New Player');
  }

  open(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

}
