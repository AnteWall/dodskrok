import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs/Rx';

import { Challenge, Player } from './../../models';

import { PlayerUtil } from './../../utils';

@Injectable()
export class GameService {
  private _activeRound: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public activeRound: Observable<boolean> = this._activeRound.asObservable();

  private _challenges: BehaviorSubject<Challenge[]> = new BehaviorSubject<Challenge[]>([]);
  public challenges: Observable<Challenge[]> = this._challenges.asObservable();

  private _players: BehaviorSubject<Player[]> = new BehaviorSubject<Player[]>([]);
  public players: Observable<Player[]> = this._players.asObservable();
  
  public startRound(): void {
    this._activeRound.next(true);
    this.addChallenge('Test');
  }

  private endRound(): void {
    this._activeRound.next(false);
  }

  public addChallenge(title: string): Challenge {
    let challenge = new Challenge(title);
    this._challenges.next(new Array<Challenge>(...this._challenges.value, challenge));
    return challenge;
  }

  public removeChallenge(challenge: Challenge): void {
    this._challenges.next(new Array<Challenge>(...this._challenges.value.filter((_v, index) => index !== this._challenges.value.indexOf(challenge))));
  }

  public addPlayer(name: string): Player {
    let playerIcon = PlayerUtil.getUnusedPlayerImage(this._players.value.map((player) => player.icon));
    let playerColor = PlayerUtil.getUnusedPlayerColor(this._players.value.map((player) => player.color));
    let newPlayer = new Player(name, playerColor, playerIcon);
    this._players.next(new Array<Player>(...this._players.value, newPlayer))
    return newPlayer;
  }

  public removePlayer(player: Player): void {        
    this._players.next(new Array<Player>(...this._players.value.filter((_v, index) => index !== this._players.value.indexOf(player))));
  }
}
