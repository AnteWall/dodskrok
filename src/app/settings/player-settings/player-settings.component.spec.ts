/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MdInputModule } from '@angular/material';
import { PlayerSettingsComponent } from './player-settings.component';

describe('PlayerSettingsComponent', () => {
  let component: PlayerSettingsComponent;
  let fixture: ComponentFixture<PlayerSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MdInputModule],
      declarations: [
        PlayerSettingsComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
