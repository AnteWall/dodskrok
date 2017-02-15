/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GameContainerComponent } from './game-container.component';
import { ChallengeComponent } from './../game/challenge/challenge.component';
import { PlayerComponent } from './../game/player/player.component';
import { GameService } from './../services';

describe('GameContainerComponent', () => {
  let component: GameContainerComponent;
  let fixture: ComponentFixture<GameContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GameContainerComponent,
        ChallengeComponent,
        PlayerComponent
      ],
      providers: [GameService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
