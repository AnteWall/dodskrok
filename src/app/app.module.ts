import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MdIconModule, MdInputModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenubarComponent } from './game/menubar/menubar.component';
import { VideoContainerComponent } from './video-container/video-container.component';
import { HeaderComponent } from './header/header.component';
import { GameContainerComponent } from './game-container/game-container.component';
import { ChallengeComponent } from './game/challenge/challenge.component';
import { PlayerComponent } from './game/player/player.component';
import { GameService } from './services';
import { SettingsComponent } from './settings/settings.component';
import { PlayerSettingsComponent } from './settings/player-settings/player-settings.component';
@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    VideoContainerComponent,
    HeaderComponent,
    GameContainerComponent,
    ChallengeComponent,
    PlayerComponent,
    SettingsComponent,
    PlayerSettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdIconModule.forRoot(),
    MdInputModule.forRoot(),
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
