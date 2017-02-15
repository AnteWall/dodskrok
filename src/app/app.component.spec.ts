/* tslint:disable:no-unused-variable */
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { APP_BASE_HREF } from '@angular/common';
import { MenubarComponent } from './game/menubar/menubar.component';
import { VideoContainerComponent } from './video-container/video-container.component';
import { HeaderComponent } from './header/header.component';
import { GameContainerComponent } from './game-container/game-container.component';
import { ChallengeComponent } from './game/challenge/challenge.component';
import { PlayerComponent } from './game/player/player.component';
import { GameService } from './services';
import { SettingsComponent } from './settings/settings.component';
import { PlayerSettingsComponent } from './settings/player-settings/player-settings.component';
import { ChallengeSettingsComponent } from './settings/challenge-settings/challenge-settings.component';
import { MaterialRootModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MenubarComponent,
        VideoContainerComponent,
        HeaderComponent,
        GameContainerComponent,
        ChallengeComponent,
        PlayerComponent,
        SettingsComponent,
        PlayerSettingsComponent,
        ChallengeSettingsComponent
      ],
      imports: [
        RouterTestingModule, 
        MaterialRootModule,
        NgbModule.forRoot(), 
        FormsModule
      ],
      providers: [GameService]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
