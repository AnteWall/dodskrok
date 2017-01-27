import { Component, OnInit, HostBinding } from '@angular/core';
import { StreamViewState } from './../enums';
@Component({
  selector: 'video-container',
  templateUrl: './video-container.component.html',
  styleUrls: ['./video-container.component.scss']
})
export class VideoContainerComponent implements OnInit {
  private viewState:StreamViewState = StreamViewState.WIDE;
  @HostBinding('class.wide') 'isWideView()';

  constructor() { }

  ngOnInit() {
  }

  isWideView() {
    return this.viewState === StreamViewState.WIDE;
  }

  toggleViewState() {
    this.viewState = (this.viewState === StreamViewState.WIDE) ? StreamViewState.COMPACT : StreamViewState.WIDE;
  }

}
