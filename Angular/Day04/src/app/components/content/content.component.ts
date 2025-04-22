import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-content',
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent implements OnInit {
  trackName: string = 'Mearn';

  @Output() onSendData = new EventEmitter<string>();

  //
  constructor() {
    console.log('1-ctor');
  }
  ngOnInit(): void {
    //
    this.onSendData.emit(this.trackName);
  }
}
