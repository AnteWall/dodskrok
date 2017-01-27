import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs/Rx';

import { Challenge, Player } from './../../models';

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

  public addChallenge(title: string): void {
    this._challenges.next(new Array<Challenge>(...this._challenges.value, new Challenge(title)));
  }
  public addPlayer(name: string): void {
    this._players.next(new Array<Player>(...this._players.value, new Player(name)))
  }
}
