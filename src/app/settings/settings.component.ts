import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import {NgbModal, ModalDismissReasons, NgbTabsetConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [NgbTabsetConfig]
})
export class SettingsComponent implements OnInit {

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

}
