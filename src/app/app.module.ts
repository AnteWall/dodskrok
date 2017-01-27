import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

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
@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    VideoContainerComponent,
    HeaderComponent,
    GameContainerComponent,
    ChallengeComponent,
    PlayerComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
