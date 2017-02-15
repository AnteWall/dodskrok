/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GameService } from './game.service';

fdescribe('GameService', () => {
  let service: GameService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameService]
    });
  });

  beforeEach(inject([GameService], s => {
    service = s;
  }));

  it('should ...', () => {
    expect(service).toBeTruthy();
  });

  it('should be able to add a player', async(() => {
    service.addPlayer('Test');
    service.players.subscribe((players) => {
      expect(players.length).toBe(1);
    });
  }));

  it('should be able to remove a player', async(() => {
    service.addPlayer('Test');
    let player2 = service.addPlayer('Test2');
    service.removePlayer(player2);
    service.players.subscribe((players) => {
      expect(players.length).toBe(1);
      expect(players).not.toContain(player2);
    });
  }));

  it('should be able to add a challenge', async(() => {
    service.addChallenge('New Challenge');
    service.challenges.subscribe((challenge) => {
      expect(challenge.length).toBe(1);
    });
  }));

  it('should be able to remove a challenge', async(() => {
    let challenge1 = service.addChallenge('New Challenge');
    let challenge2 = service.addChallenge('New Challenge2');
    service.removeChallenge(challenge2);
    service.challenges.subscribe((challenges) => {
      expect(challenges.length).toBe(1);
      expect(challenges).not.toContain(challenge2);
    });
  }));
});
