/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdInputModule } from '@angular/material';
import { GameService } from './../../services';
import { Challenge } from './../../models';
import { ChallengeSettingsComponent } from './challenge-settings.component';

describe('ChallengeSettingsComponent', () => {
  let component: ChallengeSettingsComponent;
  let fixture: ComponentFixture<ChallengeSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ChallengeSettingsComponent
      ],
      imports: [MdInputModule, FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [GameService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeSettingsComponent);
    component = fixture.componentInstance;
    component.challenge = new Challenge('Challenge Test');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
