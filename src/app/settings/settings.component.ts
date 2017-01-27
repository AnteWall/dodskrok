import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import {NgbModal, ModalDismissReasons, NgbTabsetConfig} from '@ng-bootstrap/ng-bootstrap';

import { GameService } from '../services';
import { Player } from './../models';
@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [NgbTabsetConfig]
})
export class SettingsComponent implements OnInit {
  private players: Array<Player>;
  constructor(private modalService: NgbModal, private gameService: GameService) {
    this.gameService.players.subscribe((players) => this.players = players);
  }

  ngOnInit() {

  }

  open(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

}
