/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ChallengeComponent } from './challenge.component';
import { PlayerComponent } from './../player/player.component';
import { GameService } from './../../services';
import { Challenge } from './../../models';

describe('ChallengeComponent', () => {
  let component: ChallengeComponent;
  let fixture: ComponentFixture<ChallengeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChallengeComponent, PlayerComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [GameService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeComponent);
    component = fixture.componentInstance;
    component.challenge = new Challenge('Challenge Test');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
