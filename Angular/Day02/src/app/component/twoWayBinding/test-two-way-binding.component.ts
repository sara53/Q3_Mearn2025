import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test-two-way-binding',
  imports: [FormsModule],
  templateUrl: './test-two-way-binding.component.html',
  styleUrl: './test-two-way-binding.component.css',
})
export class TestTwoWayBindingComponent {
  // studentAge: string = '';
  // studentName: string = '';
  // element: any;
  // ViewChild() -- Search
  // login() {
  //   console.log(this.studentName);
  //   console.log(this.studentAge);
  // }
  // Normal Way
  inputValue: string = '';
  text: string = 'text';
  getInputValue(value: any) {
    console.log(value);
    // let target = e.target as HTMLInputElement;
    // this.inputValue = target.value;
  }
  // operationHandler(el: any) {
  //   console.log(el.textContent);
  //   this.element = el;
  // }
}
