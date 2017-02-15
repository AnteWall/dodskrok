/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MdIcon, MdInputContainer, MdInput } from '@angular/material';

import { ChallengeSettingsComponent } from './challenge-settings.component';

describe('ChallengeSettingsComponent', () => {
  let component: ChallengeSettingsComponent;
  let fixture: ComponentFixture<ChallengeSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ChallengeSettingsComponent,
        MdIcon,
        MdInput,
        MdInputContainer
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
