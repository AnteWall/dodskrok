/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MdIconModule, MdIconRegistry, MdToolbarModule } from '@angular/material';
import { HttpModule } from '@angular/http'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenubarComponent } from './menubar.component';
import { SettingsComponent } from './../../settings/settings.component';
import { GameService } from './../../services';
describe('MenubarComponent', () => {
  let component: MenubarComponent;
  let fixture: ComponentFixture<MenubarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, NgbModule.forRoot(), MdToolbarModule],
      declarations: [ MenubarComponent, SettingsComponent ],
      providers: [ MdIconRegistry, GameService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenubarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
