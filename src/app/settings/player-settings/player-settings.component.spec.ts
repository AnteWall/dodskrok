/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MdInputModule } from '@angular/material';
import { FormsModule }   from '@angular/forms';
import { PlayerSettingsComponent } from './player-settings.component';
import { GameService } from './../../services';
import { Player } from './../../models';

describe('PlayerSettingsComponent', () => {
  let component: PlayerSettingsComponent;
  let fixture: ComponentFixture<PlayerSettingsComponent>;
  let expectedPlayer: Player;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MdInputModule, FormsModule],
      declarations: [
        PlayerSettingsComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [GameService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerSettingsComponent);
    component = fixture.componentInstance;

    expectedPlayer = new Player('Name', 'Red', '/image');
    component.player = expectedPlayer;  
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
