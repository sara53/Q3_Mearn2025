import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  @Output() myEvent = new EventEmitter();

  student: { id: number; name: string; age: number } = {
    id: 1,
    name: 'Ahmed',
    age: 25,
  };

  sendData() {
    this.myEvent.emit(this.student);
  }
}
